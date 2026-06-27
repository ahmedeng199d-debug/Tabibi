# طبيبي — Vercel General Health App

This version is ready for GitHub + Vercel and includes:

- Arabic / English / Russian language switcher
- Patient and doctor sign-up panel
- Sign-up/sign-in by email or phone number
- Doctor KYC requirement using Doctor ID
- Local demo verification list for doctors:
  - `TABIBI-DR-1001`
  - `TABIBI-DR-1002`
  - `MOH-DR-2026-001`
  - `MOH-DR-2026-002`
- General medical guide for many diseases and syndromes
- Personalized guide based on the diseases selected in the patient profile
- Appointment requests
- Medication reminders

## Important security note

This is a front-end Vercel demo using browser LocalStorage. Doctor ID verification is a demo allowlist inside `src/data.js`.

For production, move doctor verification to Firebase/Supabase/Admin backend. Never trust front-end-only verification for real medical platforms.

## Deploy to Vercel

Upload the files inside this folder directly to the root of your GitHub repository.

Vercel settings:

```txt
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

## Local test

```bash
npm install
npm run lint:syntax
npm run build
```
