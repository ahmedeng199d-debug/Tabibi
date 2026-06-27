import { languages, translations } from './i18n.js';
import { diseaseGuides, doctors, defaultProfile, approvedDoctorIds } from './data.js';

const STORAGE_KEY = 'tabibi_general_vercel_v3_auth';
const app = document.getElementById('app');

const initialState = {
  lang: 'ar',
  role: null,
  currentUserId: null,
  authMode: 'signup',
  authRole: 'patient',
  authMethod: 'email',
  page: 'landing',
  guideMode: 'personal',
  guideSearch: '',
  profile: { ...defaultProfile },
  accounts: [],
  appointments: [],
  reminders: [],
  toast: ''
};

let state = loadState();
let reminderTimer = null;

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredCloneSafe(initialState);
    return { ...structuredCloneSafe(initialState), ...JSON.parse(raw) };
  } catch {
    return structuredCloneSafe(initialState);
  }
}

function structuredCloneSafe(value) {
  return JSON.parse(JSON.stringify(value));
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function t(key) {
  return translations[state.lang]?.[key] ?? translations.ar[key] ?? key;
}

function local(value) {
  if (!value) return '';
  if (Array.isArray(value)) return value;
  return value[state.lang] ?? value.ar ?? value.en ?? '';
}

function langMeta() {
  return languages.find((item) => item.code === state.lang) || languages[0];
}

function setState(patch) {
  state = { ...state, ...patch };
  saveState();
  render();
}

function showToast(message) {
  state.toast = message;
  render();
  window.setTimeout(() => {
    state.toast = '';
    render();
  }, 2200);
}

function escapeHtml(value = '') {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function isProfileComplete() {
  return Boolean(state.profile?.fullName && state.profile?.diseases?.length);
}

function selectedGuides() {
  const selected = new Set(state.profile.diseases || []);
  return diseaseGuides.filter((guide) => selected.has(guide.id));
}

function render() {
  const meta = langMeta();
  document.documentElement.lang = state.lang;
  document.documentElement.dir = meta.dir;

  let html = '';
  if (!state.role) {
    html = renderLanding();
  } else {
    html = `${renderTopbar()}<main class="container">${renderPage()}</main>${renderBottomNav()}`;
  }

  if (state.toast) html += `<div class="toast">${escapeHtml(state.toast)}</div>`;
  app.innerHTML = html;
  bindEvents();
  startReminderLoop();
}

function renderLanguageSwitch() {
  return `<div class="lang-switch" aria-label="Language switcher">
    ${languages.map((lang) => `<button class="lang-btn ${state.lang === lang.code ? 'active' : ''}" data-action="set-lang" data-lang="${lang.code}">${lang.label}</button>`).join('')}
  </div>`;
}

function renderTopbar() {
  return `<header class="topbar">
    <div class="topbar-inner">
      <div class="brand">
        <img src="/logo.svg" alt="${t('appName')} logo" />
        <div>
          <div class="brand-title">${t('appName')}</div>
          <div class="brand-subtitle">${t('appTagline')}</div>
        </div>
      </div>
      <div class="action-row">
        ${renderLanguageSwitch()}
        <button class="btn btn-ghost" data-action="logout">${t('signOut')}</button>
      </div>
    </div>
  </header>`;
}

function renderLanding() {
  return `<main class="container hero">
    <section class="hero-card">
      <img class="logo-big" src="/logo.svg" alt="${t('appName')}" />
      <div class="kicker">${t('heroKicker')}</div>
      <h1>${t('heroTitle')}</h1>
      <p class="lead">${t('heroLead')}</p>
      <div class="action-row">
        ${renderLanguageSwitch()}
      </div>
      <div class="auth-note">🔐 ${t('demoSecurityNotice')}</div>
    </section>
    ${renderAuthPanel()}
  </main>`;
}

function renderAuthPanel() {
  const isSignup = state.authMode === 'signup';
  const isDoctor = state.authRole === 'doctor';
  const useEmail = state.authMethod === 'email';
  return `<section class="card auth-card">
    <div class="segmented">
      <button class="segment ${isSignup ? 'active' : ''}" data-action="set-auth-mode" data-mode="signup">${t('signUp')}</button>
      <button class="segment ${!isSignup ? 'active' : ''}" data-action="set-auth-mode" data-mode="signin">${t('signIn')}</button>
    </div>
    <form class="form" id="auth-form">
      ${isSignup ? `<div class="field">
        <label>${t('chooseAccountType')}</label>
        <div class="role-choice-grid">
          <button type="button" class="role-choice ${state.authRole === 'patient' ? 'active' : ''}" data-action="set-auth-role" data-role="patient">🧑 ${t('signupAsPatient')}</button>
          <button type="button" class="role-choice ${state.authRole === 'doctor' ? 'active' : ''}" data-action="set-auth-role" data-role="doctor">👨‍⚕️ ${t('signupAsDoctor')}</button>
        </div>
      </div>` : `<input type="hidden" name="role" value="${escapeHtml(state.authRole)}" />`}

      ${isSignup ? field('fullName', t('fullName'), '', 'text') : ''}

      <div class="field">
        <label>${t('authMethod')}</label>
        <div class="role-choice-grid compact">
          <button type="button" class="role-choice ${useEmail ? 'active' : ''}" data-action="set-auth-method" data-method="email">✉️ ${t('useEmail')}</button>
          <button type="button" class="role-choice ${!useEmail ? 'active' : ''}" data-action="set-auth-method" data-method="phone">📱 ${t('usePhone')}</button>
        </div>
      </div>

      ${useEmail ? field('email', t('email'), '', 'email') : field('phone', t('phone'), '', 'tel')}
      ${field('password', t('password'), '', 'password')}

      ${isSignup && isDoctor ? `<div class="kyc-box">
        <h3 class="card-title">🪪 ${t('doctorKyc')}</h3>
        ${field('doctorId', t('doctorId'), '', 'text', 'TABIBI-DR-1001')}
        <small>${t('doctorIdHelp')}</small>
        <div class="form-grid" style="margin-top:12px">
          ${field('doctorSpecialty', t('doctorSpecialty'), '', 'text')}
          ${field('clinicName', t('clinicName'), '', 'text')}
        </div>
      </div>` : ''}

      <button class="btn ${isDoctor ? 'btn-red' : 'btn-primary'} btn-full" type="submit">
        ${isSignup ? t('createAccount') : t('loginAccount')}
      </button>
      <button class="btn btn-ghost btn-full" type="button" data-action="toggle-auth-mode">
        ${isSignup ? t('alreadyHaveAccount') : t('needAccount')}
      </button>
    </form>
  </section>`;
}

function renderPage() {
  if (state.role === 'doctor') return renderDoctorPage();
  if (state.page === 'profile') return renderProfilePage();
  if (state.page === 'guide') return renderGuidePage();
  if (state.page === 'appointments') return renderAppointmentsPage();
  if (state.page === 'reminders') return renderRemindersPage();
  return renderPatientHome();
}

function renderBottomNav() {
  const items = state.role === 'doctor'
    ? [
        ['home', '🏠', t('home')],
        ['appointments', '📅', t('requests')],
        ['guide', '📚', t('guide')],
        ['profile', '👤', t('profile')]
      ]
    : [
        ['home', '🏠', t('home')],
        ['guide', '📚', t('guide')],
        ['reminders', '💊', t('reminders')],
        ['appointments', '📅', t('appointments')]
      ];
  return `<nav class="bottom-nav"><div class="bottom-nav-inner">
    ${items.map(([page, icon, label]) => `<button class="nav-btn ${state.page === page ? 'active' : ''}" data-action="go-page" data-page="${page}"><span>${icon}</span>${label}</button>`).join('')}
  </div></nav>`;
}

function renderPatientHome() {
  const guides = selectedGuides();
  const name = state.profile.fullName || t('patient');
  return `<section>
    <h2 class="section-title">${t('welcomePatient')}، ${escapeHtml(name)}</h2>
    <div class="grid">
      <article class="card col-12 warning">
        <h3 class="card-title">⚠️ ${t('disclaimerTitle')}</h3>
        <p class="card-text">${t('disclaimer')}</p>
      </article>
      ${!isProfileComplete() ? `<article class="card col-12">
        <h3 class="card-title">👤 ${t('healthProfile')}</h3>
        <p class="card-text">${t('healthProfileDesc')}</p>
        <div class="action-row" style="margin-top:14px"><button class="btn btn-primary" data-action="go-page" data-page="profile">${t('completeProfile')}</button></div>
      </article>` : ''}
      <article class="card col-4">
        <h3 class="card-title">📚 ${t('personalizedGuide')}</h3>
        <p class="card-text">${t('personalizedGuideDesc')}</p>
        <div class="stat-row"><div class="stat"><strong>${guides.length}</strong><span>${t('forYourProfile')}</span></div></div>
        <div class="action-row" style="margin-top:14px"><button class="btn btn-soft" data-action="go-page" data-page="guide">${t('guide')}</button></div>
      </article>
      <article class="card col-4">
        <h3 class="card-title">📅 ${t('appointmentBooking')}</h3>
        <p class="card-text">${t('appointmentDesc')}</p>
        <div class="stat-row"><div class="stat"><strong>${state.appointments.length}</strong><span>${t('appointments')}</span></div></div>
        <div class="action-row" style="margin-top:14px"><button class="btn btn-soft" data-action="go-page" data-page="appointments">${t('appointmentBooking')}</button></div>
      </article>
      <article class="card col-4">
        <h3 class="card-title">💊 ${t('medicationReminder')}</h3>
        <p class="card-text">${t('medicationDesc')}</p>
        <div class="stat-row"><div class="stat"><strong>${state.reminders.length}</strong><span>${t('reminders')}</span></div></div>
        <div class="action-row" style="margin-top:14px"><button class="btn btn-soft" data-action="go-page" data-page="reminders">${t('reminders')}</button></div>
      </article>
      <article class="card col-12">
        <h3 class="card-title">🧬 ${t('diseasesQuestion')}</h3>
        <div class="nav-pills">${renderDiseaseChips(state.profile.diseases || [])}</div>
      </article>
    </div>
  </section>`;
}

function renderDiseaseChips(ids) {
  if (!ids.length) return `<span class="badge">${t('none')}</span>`;
  return ids.map((id) => {
    const guide = diseaseGuides.find((item) => item.id === id);
    return `<span class="chip selected">${guide ? local(guide.name) : t('otherDisease')}</span>`;
  }).join('');
}

function renderProfilePage() {
  const p = state.profile || defaultProfile;
  return `<section>
    <h2 class="section-title">👤 ${isProfileComplete() ? t('editProfile') : t('completeProfile')}</h2>
    <form class="card form" id="profile-form">
      <div class="form-grid">
        ${field('fullName', t('fullName'), p.fullName, 'text')}
        ${field('age', t('age'), p.age, 'number')}
        <div class="field"><label>${t('gender')}</label><select class="select" name="gender">
          <option value="">${t('select')}</option>
          <option value="male" ${p.gender === 'male' ? 'selected' : ''}>${t('male')}</option>
          <option value="female" ${p.gender === 'female' ? 'selected' : ''}>${t('female')}</option>
        </select></div>
        ${field('phone', t('phone'), p.phone, 'tel')}
        ${field('address', t('address'), p.address, 'text')}
        ${field('normalBloodPressure', t('normalBloodPressure'), p.normalBloodPressure, 'text', '120/80')}
        ${field('weight', t('weight'), p.weight, 'number')}
        ${field('height', t('height'), p.height, 'number')}
      </div>
      <div class="field">
        <label>${t('diseasesQuestion')}</label>
        <div class="checkbox-grid">
          ${diseaseGuides.map((guide) => `<label class="check-item"><input type="checkbox" name="diseases" value="${guide.id}" ${(p.diseases || []).includes(guide.id) ? 'checked' : ''}/><span>${local(guide.name)}</span></label>`).join('')}
          <label class="check-item"><input type="checkbox" name="diseases" value="other" ${(p.diseases || []).includes('other') ? 'checked' : ''}/><span>${t('otherDisease')}</span></label>
        </div>
      </div>
      <div class="form-grid">
        ${field('otherDiseaseText', t('otherDisease'), p.otherDiseaseText, 'text')}
        ${field('diseaseDuration', t('diseaseDuration'), p.diseaseDuration, 'text')}
      </div>
      ${area('disabilities', t('disabilities'), p.disabilities)}
      ${area('allergies', t('allergies'), p.allergies)}
      ${area('currentMedicines', t('currentMedicines'), p.currentMedicines)}
      ${area('otherNotes', t('otherNotes'), p.otherNotes)}
      <div class="action-row">
        <button class="btn btn-primary" type="submit">${t('saveProfile')}</button>
        <button class="btn btn-ghost" type="button" data-action="export-data">${t('exportData')}</button>
      </div>
    </form>
  </section>`;
}

function field(name, label, value, type = 'text', placeholder = '') {
  return `<div class="field"><label>${label}</label><input class="input" name="${name}" type="${type}" value="${escapeHtml(value || '')}" placeholder="${escapeHtml(placeholder)}" /></div>`;
}

function area(name, label, value) {
  return `<div class="field"><label>${label}</label><textarea class="textarea" name="${name}">${escapeHtml(value || '')}</textarea></div>`;
}

function renderGuidePage() {
  const personal = selectedGuides();
  const query = state.guideSearch.trim().toLowerCase();
  const source = state.guideMode === 'personal' ? personal : diseaseGuides;
  const filtered = source.filter((guide) => {
    const searchText = `${local(guide.name)} ${local(guide.category)} ${local(guide.summary)}`.toLowerCase();
    return !query || searchText.includes(query);
  });

  return `<section>
    <h2 class="section-title">📚 ${t('guide')}</h2>
    <article class="card warning" style="margin-bottom:14px">
      <h3 class="card-title">⚠️ ${t('disclaimerTitle')}</h3>
      <p class="card-text">${t('disclaimer')}</p>
    </article>
    <div class="guide-toolbar">
      <button class="pill ${state.guideMode === 'personal' ? 'active' : ''}" data-action="set-guide-mode" data-mode="personal">${t('forYourProfile')} (${personal.length})</button>
      <button class="pill ${state.guideMode === 'all' ? 'active' : ''}" data-action="set-guide-mode" data-mode="all">${t('browseAll')} (${diseaseGuides.length})</button>
      <input class="input search" id="guide-search" value="${escapeHtml(state.guideSearch)}" placeholder="${t('searchDisease')}" />
    </div>
    ${state.guideMode === 'personal' && !personal.length ? `<div class="card empty">${t('completeProfile')}</div>` : ''}
    <div class="grid">
      ${filtered.map(renderDiseaseCard).join('') || `<div class="card col-12 empty">${t('none')}</div>`}
    </div>
  </section>`;
}

function renderDiseaseCard(guide) {
  return `<article class="card disease-card col-6">
    <span class="badge">${local(guide.category)}</span>
    <h3 class="card-title" style="margin-top:10px">${local(guide.name)}</h3>
    <p class="card-text">${local(guide.summary)}</p>
    <div class="guide-list">
      ${guideSection('✅', t('goodForYou'), local(guide.good), 'good')}
      ${guideSection('🚫', t('avoidForYou'), local(guide.avoid), 'bad')}
      ${guideSection('🚨', t('urgentSigns'), local(guide.urgent), 'warning')}
      ${guideSection('❓', t('questionsForDoctor'), local(guide.questions), '')}
    </div>
  </article>`;
}

function guideSection(icon, title, items, className) {
  return `<div class="guide-row ${className}"><strong>${icon} ${title}</strong><p>${items.map((item) => `• ${escapeHtml(item)}`).join('<br>')}</p></div>`;
}

function renderAppointmentsPage() {
  const list = [...state.appointments].reverse();
  return `<section>
    <h2 class="section-title">📅 ${t('appointmentBooking')}</h2>
    <form class="card form" id="appointment-form">
      <div class="form-grid">
        <div class="field"><label>${t('chooseDoctor')}</label><select class="select" name="doctorId" required>
          ${doctors.map((doctor) => `<option value="${doctor.id}">${local(doctor.name)} — ${local(doctor.specialty)}</option>`).join('')}
        </select></div>
        ${field('requestedDate', t('requestedDate'), '', 'date')}
      </div>
      ${area('reason', t('appointmentReason'), '')}
      <button class="btn btn-primary" type="submit">${t('requestAppointment')}</button>
    </form>
    <h3 class="section-title">${t('appointments')}</h3>
    <div class="list">${list.map(renderAppointment).join('') || `<div class="card empty">${t('noAppointments')}</div>`}</div>
  </section>`;
}

function renderAppointment(item) {
  const doctor = doctors.find((d) => d.id === item.doctorId);
  return `<article class="list-item">
    <h4>${doctor ? local(doctor.name) : t('doctor')}</h4>
    <p>${escapeHtml(item.reason || '')}</p>
    <div class="disease-meta">
      <span class="badge">${t('requestedDate')}: ${escapeHtml(item.requestedDate || '-')}</span>
      <span class="badge">${t('status')}: ${t(item.status || 'pending')}</span>
    </div>
  </article>`;
}

function renderRemindersPage() {
  const list = [...state.reminders].reverse();
  return `<section>
    <h2 class="section-title">💊 ${t('medicationReminder')}</h2>
    <form class="card form" id="reminder-form">
      <div class="form-grid">
        ${field('medicineName', t('medicineName'), '', 'text')}
        ${field('dosage', t('dosage'), '', 'text')}
        ${field('timesPerDay', t('timesPerDay'), '1', 'number')}
      </div>
      <div class="field"><label>${t('reminderTimes')}</label><input class="input" name="times" type="text" value="08:00" placeholder="08:00, 14:00, 22:00" /></div>
      <div class="action-row">
        <button class="btn btn-primary" type="submit">${t('addReminder')}</button>
        <button class="btn btn-ghost" type="button" data-action="request-notifications">${t('requestNotification')}</button>
      </div>
    </form>
    <h3 class="section-title">${t('reminders')}</h3>
    <div class="list">${list.map(renderReminder).join('') || `<div class="card empty">${t('noReminders')}</div>`}</div>
  </section>`;
}

function renderReminder(item) {
  return `<article class="list-item">
    <h4>💊 ${escapeHtml(item.medicineName)}</h4>
    <p>${escapeHtml(item.dosage || '')}</p>
    <div class="disease-meta">
      ${(item.times || []).map((time) => `<span class="badge">⏰ ${escapeHtml(time)}</span>`).join('')}
      <button class="pill danger" data-action="delete-reminder" data-id="${item.id}">${t('delete')}</button>
    </div>
  </article>`;
}

function renderDoctorPage() {
  const requests = [...state.appointments].reverse();
  if (state.page === 'guide') return renderGuidePage();
  if (state.page === 'profile') {
    const account = currentAccount();
    const kyc = account?.doctorKyc;
    return `<section><h2 class="section-title">👨‍⚕️ ${t('doctorDashboard')}</h2>
      <article class="card">
        <h3 class="card-title">${t('doctor')} ${kyc?.status === 'verified' ? `✅ ${t('verifiedDoctor')}` : ''}</h3>
        <p class="card-text">${t('doctorDesc')}</p>
        <div class="guide-list" style="margin-top:14px">
          <div class="guide-row good"><strong>🪪 ${t('doctorKyc')}</strong><p>
            ${t('fullName')}: ${escapeHtml(account?.fullName || '-')}<br>
            ${t('doctorId')}: ${escapeHtml(kyc?.doctorId || '-')}<br>
            ${t('doctorSpecialty')}: ${escapeHtml(kyc?.specialty || '-')}<br>
            ${t('clinicName')}: ${escapeHtml(kyc?.clinicName || '-')}<br>
            ${t('kycStatus')}: ${kyc?.status === 'verified' ? t('verified') : t('pendingReview')}
          </p></div>
        </div>
      </article></section>`;
  }
  return `<section>
    <h2 class="section-title">👨‍⚕️ ${t('doctorDashboard')}</h2>
    <div class="grid">
      <article class="card col-4"><h3 class="card-title">📅 ${t('requests')}</h3><div class="stat-row"><div class="stat"><strong>${state.appointments.length}</strong><span>${t('appointments')}</span></div></div></article>
      <article class="card col-8 warning"><h3 class="card-title">⚠️ ${t('disclaimerTitle')}</h3><p class="card-text">${t('disclaimer')}</p></article>
      <article class="card col-12"><h3 class="card-title">${t('requests')}</h3><div class="list">${requests.map(renderDoctorRequest).join('') || `<div class="empty">${t('noAppointments')}</div>`}</div></article>
    </div>
  </section>`;
}

function renderDoctorRequest(item) {
  const doctor = doctors.find((d) => d.id === item.doctorId);
  const p = state.profile;
  return `<article class="list-item">
    <h4>${escapeHtml(p.fullName || t('patient'))} → ${doctor ? local(doctor.name) : t('doctor')}</h4>
    <p>${escapeHtml(item.reason || '')}</p>
    <div class="guide-list">
      <div class="guide-row"><strong>👤 ${t('patientInfo')}</strong><p>
        ${t('age')}: ${escapeHtml(p.age || '-')}<br>
        ${t('gender')}: ${p.gender ? t(p.gender) : '-'}<br>
        ${t('phone')}: ${escapeHtml(p.phone || '-')}<br>
        ${t('normalBloodPressure')}: ${escapeHtml(p.normalBloodPressure || '-')}
      </p></div>
      <div class="guide-row"><strong>🧬 ${t('diseasesQuestion')}</strong><p>${renderDiseaseChips(p.diseases || [])}</p></div>
      <div class="guide-row"><strong>💊 ${t('currentMedicines')}</strong><p>${escapeHtml(p.currentMedicines || '-')}</p></div>
    </div>
    <div class="disease-meta">
      <span class="badge">${t('status')}: ${t(item.status || 'pending')}</span>
      <button class="pill safe" data-action="appointment-status" data-id="${item.id}" data-status="accepted">${t('accept')}</button>
      <button class="pill danger" data-action="appointment-status" data-id="${item.id}" data-status="rejected">${t('reject')}</button>
    </div>
  </article>`;
}

function bindEvents() {
  app.querySelectorAll('[data-action="set-lang"]').forEach((btn) => btn.addEventListener('click', () => setState({ lang: btn.dataset.lang })));
  app.querySelectorAll('[data-action="set-auth-mode"]').forEach((btn) => btn.addEventListener('click', () => setState({ authMode: btn.dataset.mode })));
  app.querySelectorAll('[data-action="toggle-auth-mode"]').forEach((btn) => btn.addEventListener('click', () => setState({ authMode: state.authMode === 'signup' ? 'signin' : 'signup' })));
  app.querySelectorAll('[data-action="set-auth-role"]').forEach((btn) => btn.addEventListener('click', () => setState({ authRole: btn.dataset.role })));
  app.querySelectorAll('[data-action="set-auth-method"]').forEach((btn) => btn.addEventListener('click', () => setState({ authMethod: btn.dataset.method })));
  app.querySelectorAll('[data-action="logout"]').forEach((btn) => btn.addEventListener('click', () => setState({ role: null, currentUserId: null, page: 'landing' })));
  app.querySelectorAll('[data-action="go-page"]').forEach((btn) => btn.addEventListener('click', () => setState({ page: btn.dataset.page })));
  app.querySelectorAll('[data-action="set-guide-mode"]').forEach((btn) => btn.addEventListener('click', () => setState({ guideMode: btn.dataset.mode })));
  app.querySelectorAll('[data-action="request-notifications"]').forEach((btn) => btn.addEventListener('click', requestNotifications));
  app.querySelectorAll('[data-action="delete-reminder"]').forEach((btn) => btn.addEventListener('click', () => {
    state.reminders = state.reminders.filter((item) => item.id !== btn.dataset.id);
    saveState();
    render();
  }));
  app.querySelectorAll('[data-action="appointment-status"]').forEach((btn) => btn.addEventListener('click', () => {
    state.appointments = state.appointments.map((item) => item.id === btn.dataset.id ? { ...item, status: btn.dataset.status } : item);
    saveState();
    render();
  }));
  const search = app.querySelector('#guide-search');
  if (search) search.addEventListener('input', (event) => {
    state.guideSearch = event.target.value;
    saveState();
    render();
  });
  const authForm = app.querySelector('#auth-form');
  if (authForm) authForm.addEventListener('submit', handleAuthSubmit);
  const profileForm = app.querySelector('#profile-form');
  if (profileForm) profileForm.addEventListener('submit', handleProfileSubmit);
  const appointmentForm = app.querySelector('#appointment-form');
  if (appointmentForm) appointmentForm.addEventListener('submit', handleAppointmentSubmit);
  const reminderForm = app.querySelector('#reminder-form');
  if (reminderForm) reminderForm.addEventListener('submit', handleReminderSubmit);
  const exportBtn = app.querySelector('[data-action="export-data"]');
  if (exportBtn) exportBtn.addEventListener('click', exportData);
}

function normalizeDoctorId(value) {
  return String(value || '').trim().toUpperCase();
}

function accountContact(account) {
  return account.authMethod === 'email' ? account.email : account.phone;
}

function handleAuthSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const isSignup = state.authMode === 'signup';
  const role = state.authRole || 'patient';
  const authMethod = state.authMethod || 'email';
  const email = formValue(form, 'email').toLowerCase();
  const phone = formValue(form, 'phone');
  const password = formValue(form, 'password');
  const contact = authMethod === 'email' ? email : phone;

  if (!contact || !password) {
    showToast(t('fillRequired'));
    return;
  }

  if (!isSignup) {
    const account = (state.accounts || []).find((item) => item.role === role && item.authMethod === authMethod && accountContact(item) === contact && item.password === password);
    if (!account) {
      showToast(t('invalidLogin'));
      return;
    }
    state.role = account.role;
    state.currentUserId = account.id;
    state.page = 'home';
    if (account.role === 'patient' && account.fullName && !state.profile.fullName) {
      state.profile.fullName = account.fullName;
      if (account.phone && !state.profile.phone) state.profile.phone = account.phone;
    }
    saveState();
    showToast(t('signedIn'));
    return;
  }

  const fullName = formValue(form, 'fullName');
  if (!fullName) {
    showToast(t('fillRequired'));
    return;
  }

  const exists = (state.accounts || []).some((item) => item.authMethod === authMethod && accountContact(item) === contact);
  if (exists) {
    showToast(t('accountExists'));
    return;
  }

  let doctorKyc = null;
  if (role === 'doctor') {
    const doctorId = normalizeDoctorId(formValue(form, 'doctorId'));
    if (!doctorId) {
      showToast(t('doctorIdRequired'));
      return;
    }
    if (!approvedDoctorIds.includes(doctorId)) {
      showToast(t('doctorIdRejected'));
      return;
    }
    doctorKyc = {
      doctorId,
      specialty: formValue(form, 'doctorSpecialty'),
      clinicName: formValue(form, 'clinicName'),
      status: 'verified',
      verifiedAt: new Date().toISOString()
    };
  }

  const account = {
    id: `${role}-${Date.now()}`,
    role,
    authMethod,
    email,
    phone,
    password,
    fullName,
    doctorKyc,
    createdAt: new Date().toISOString()
  };

  state.accounts = [...(state.accounts || []), account];
  state.role = role;
  state.currentUserId = account.id;
  state.page = 'home';
  if (role === 'patient') {
    state.profile.fullName = fullName;
    if (phone) state.profile.phone = phone;
  }
  saveState();
  showToast(t('accountCreated'));
}

function currentAccount() {
  return (state.accounts || []).find((item) => item.id === state.currentUserId) || null;
}

function formValue(form, name) {
  return new FormData(form).get(name)?.toString().trim() || '';
}

function handleProfileSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const selected = Array.from(form.querySelectorAll('input[name="diseases"]:checked')).map((input) => input.value);
  if (!selected.length) {
    showToast(t('selectAtLeastOne'));
    return;
  }
  state.profile = {
    fullName: formValue(form, 'fullName'),
    age: formValue(form, 'age'),
    gender: formValue(form, 'gender'),
    phone: formValue(form, 'phone'),
    address: formValue(form, 'address'),
    diseases: selected,
    otherDiseaseText: formValue(form, 'otherDiseaseText'),
    diseaseDuration: formValue(form, 'diseaseDuration'),
    normalBloodPressure: formValue(form, 'normalBloodPressure'),
    weight: formValue(form, 'weight'),
    height: formValue(form, 'height'),
    disabilities: formValue(form, 'disabilities'),
    allergies: formValue(form, 'allergies'),
    currentMedicines: formValue(form, 'currentMedicines'),
    otherNotes: formValue(form, 'otherNotes')
  };
  state.guideMode = 'personal';
  state.page = 'home';
  saveState();
  showToast(t('saved'));
}

function handleAppointmentSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const appointment = {
    id: `apt-${Date.now()}`,
    doctorId: formValue(form, 'doctorId'),
    requestedDate: formValue(form, 'requestedDate'),
    reason: formValue(form, 'reason'),
    status: 'pending',
    createdAt: new Date().toISOString()
  };
  state.appointments.push(appointment);
  saveState();
  showToast(t('appointmentSent'));
}

function handleReminderSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const times = formValue(form, 'times').split(',').map((item) => item.trim()).filter(Boolean);
  const fallbackTime = new Date().toTimeString().slice(0, 5);
  state.reminders.push({
    id: `med-${Date.now()}`,
    medicineName: formValue(form, 'medicineName'),
    dosage: formValue(form, 'dosage'),
    timesPerDay: formValue(form, 'timesPerDay'),
    times: times.length ? times : [fallbackTime],
    lastNotifiedDateTime: ''
  });
  saveState();
  showToast(t('reminderAdded'));
}

async function requestNotifications() {
  if (!('Notification' in window)) {
    showToast('Browser notifications are not supported here.');
    return;
  }
  const permission = await Notification.requestPermission();
  showToast(permission === 'granted' ? t('saved') : t('none'));
}

function startReminderLoop() {
  if (reminderTimer) return;
  reminderTimer = window.setInterval(checkReminders, 30000);
  checkReminders();
}

function checkReminders() {
  const now = new Date();
  const hhmm = now.toTimeString().slice(0, 5);
  const date = now.toISOString().slice(0, 10);
  let changed = false;
  state.reminders.forEach((reminder) => {
    if (!reminder.times?.includes(hhmm)) return;
    const stamp = `${date}-${hhmm}`;
    if (reminder.lastNotifiedDateTime === stamp) return;
    reminder.lastNotifiedDateTime = stamp;
    changed = true;
    const message = `${reminder.medicineName} ${reminder.dosage || ''}`.trim();
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(t('medicationReminder'), { body: message, icon: '/logo.svg' });
    } else {
      showToast(`💊 ${message}`);
    }
  });
  if (changed) saveState();
}

function exportData() {
  const payload = JSON.stringify({ exportedAt: new Date().toISOString(), data: state }, null, 2);
  navigator.clipboard?.writeText(payload).then(() => showToast(t('copied'))).catch(() => {
    const blob = new Blob([payload], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'tabibi-data.json';
    link.click();
    URL.revokeObjectURL(url);
  });
}

render();
