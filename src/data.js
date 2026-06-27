const tx = (ar, en, ru) => ({ ar, en, ru });
const arr = (ar, en, ru) => ({ ar, en, ru });

export const doctors = [
  { id: 'dr-family', name: tx('د. سارة — طب الأسرة', 'Dr. Sarah — Family Medicine', 'Д-р Сара — семейная медицина'), specialty: tx('طب عام وأسرة', 'General & family medicine', 'Общая и семейная медицина') },
  { id: 'dr-internal', name: tx('د. أحمد — باطنية', 'Dr. Ahmed — Internal Medicine', 'Д-р Ахмед — терапия'), specialty: tx('أمراض مزمنة وسكري وضغط', 'Chronic disease, diabetes, blood pressure', 'Хронические болезни, диабет, давление') },
  { id: 'dr-cardio', name: tx('د. ليلى — قلبية', 'Dr. Layla — Cardiology', 'Д-р Лейла — кардиология'), specialty: tx('القلب والشرايين', 'Heart and vascular care', 'Сердце и сосуды') },
  { id: 'dr-pedia', name: tx('د. عمر — أطفال', 'Dr. Omar — Pediatrics', 'Д-р Омар — педиатрия'), specialty: tx('الأطفال والمتلازمات', 'Children and syndromes', 'Дети и синдромы') },
  { id: 'dr-derm', name: tx('د. ناتاليا — جلدية', 'Dr. Natalia — Dermatology', 'Д-р Наталья — дерматология'), specialty: tx('الجلد والحساسية', 'Skin and allergy', 'Кожа и аллергия') }
];

export const diseaseGuides = [
  {
    id: 'diabetes2',
    category: tx('غدد وسكري', 'Endocrine', 'Эндокринология'),
    name: tx('السكري النوع الثاني', 'Type 2 diabetes', 'Сахарный диабет 2 типа'),
    summary: tx('الهدف هو ضبط السكر، حماية القلب والكلى والعيون، وتقليل نوبات الهبوط أو الارتفاع.', 'The goal is glucose control while protecting the heart, kidneys, eyes, and nerves.', 'Цель — контроль сахара и защита сердца, почек, глаз и нервов.'),
    good: arr([
      'قياس السكر حسب خطة الطبيب وتسجيل القراءات.',
      'وجبات منتظمة مع تقليل السكريات السريعة والمشروبات المحلاة.',
      'المشي أو نشاط خفيف أغلب أيام الأسبوع إذا سمح الطبيب.'
    ], [
      'Track glucose as advised and keep a reading log.',
      'Eat regular meals and reduce sugary drinks and fast sugars.',
      'Walk or do light activity most days if your clinician allows it.'
    ], [
      'Измеряйте сахар по плану врача и ведите журнал.',
      'Питайтесь регулярно, ограничьте сладкие напитки и быстрые сахара.',
      'Ходьба или легкая активность большинство дней, если врач разрешил.'
    ]),
    avoid: arr([
      'إيقاف الدواء عند تحسن السكر دون استشارة.',
      'تجاهل جروح القدم أو التنميل.',
      'الصيام الطويل مع أدوية قد تسبب هبوط السكر دون خطة.'
    ], [
      'Stopping medication when glucose improves without medical advice.',
      'Ignoring foot wounds, numbness, or infections.',
      'Long fasting while using glucose-lowering medicines without a plan.'
    ], [
      'Не прекращайте лекарства без врача при улучшении сахара.',
      'Не игнорируйте раны стопы, онемение или инфекции.',
      'Не голодайте долго на сахароснижающих лекарствах без плана.'
    ]),
    urgent: arr(['إغماء أو ارتباك شديد.', 'سكر مرتفع جدًا مع عطش شديد وقيء.', 'جرح قدم ملتهب أو أسود اللون.'], ['Fainting or severe confusion.', 'Very high glucose with intense thirst and vomiting.', 'Infected or dark foot wound.'], ['Обморок или сильная спутанность.', 'Очень высокий сахар с жаждой и рвотой.', 'Инфицированная или темная рана стопы.']),
    questions: arr(['ما هدف السكر التراكمي المناسب لي؟', 'هل أحتاج فحص عين أو قدم؟', 'ماذا أفعل عند هبوط السكر؟'], ['What A1C target is right for me?', 'Do I need eye or foot screening?', 'What should I do during low glucose?'], ['Какой целевой HbA1c мне подходит?', 'Нужно ли обследовать глаза или стопы?', 'Что делать при гипогликемии?'])
  },
  {
    id: 'hypertension',
    category: tx('قلب وضغط', 'Cardiovascular', 'Сердечно-сосудистые'),
    name: tx('ارتفاع ضغط الدم', 'High blood pressure', 'Артериальная гипертензия'),
    summary: tx('ارتفاع الضغط غالبًا صامت، والمتابعة المنتظمة تقلل خطر الجلطات ومشاكل القلب والكلى.', 'High blood pressure is often silent; regular tracking lowers stroke, heart, and kidney risk.', 'Гипертония часто протекает тихо; регулярный контроль снижает риск инсульта, сердца и почек.'),
    good: arr(['قياس الضغط في نفس الوقت يوميًا وتسجيله.', 'تقليل الملح والأطعمة المصنعة.', 'الالتزام بالدواء حتى لو شعرت أنك جيد.'], ['Measure blood pressure at the same time daily and log it.', 'Reduce salt and processed foods.', 'Take medication consistently even when you feel well.'], ['Измеряйте давление в одно и то же время и записывайте.', 'Ограничьте соль и переработанные продукты.', 'Принимайте лекарства регулярно, даже если самочувствие хорошее.']),
    avoid: arr(['مضاعفة جرعة الدواء إذا ارتفع الضغط دون توجيه طبي.', 'المسكنات مثل ibuprofen بكثرة دون سؤال الطبيب.', 'الإكثار من الكافيين أو مشروبات الطاقة.'], ['Doubling doses during a high reading without guidance.', 'Frequent NSAIDs such as ibuprofen without asking your clinician.', 'Excess caffeine or energy drinks.'], ['Не удваивайте дозу при высоком давлении без врача.', 'Не злоупотребляйте НПВС, например ибупрофеном, без консультации.', 'Избыток кофеина и энергетиков.']),
    urgent: arr(['ضغط شديد مع ألم صدر أو ضيق نفس.', 'ضعف مفاجئ في جهة من الجسم أو صعوبة كلام.', 'صداع شديد مفاجئ مع تشوش رؤية.'], ['High BP with chest pain or shortness of breath.', 'Sudden weakness on one side or speech trouble.', 'Sudden severe headache with vision changes.'], ['Высокое давление с болью в груди или одышкой.', 'Внезапная слабость одной стороны или нарушение речи.', 'Внезапная сильная головная боль с нарушением зрения.']),
    questions: arr(['ما هدف الضغط المناسب لي؟', 'هل أحتاج فحوصات كلى أو قلب؟', 'ما الأدوية التي ترفع الضغط؟'], ['What BP target is right for me?', 'Do I need kidney or heart tests?', 'Which medicines can raise BP?'], ['Какое целевое давление мне подходит?', 'Нужны ли анализы почек или сердца?', 'Какие лекарства повышают давление?'])
  },
  {
    id: 'asthma',
    category: tx('تنفسي', 'Respiratory', 'Дыхательная система'),
    name: tx('الربو', 'Asthma', 'Астма'),
    summary: tx('الربو يحتاج خطة واضحة: بخاخ وقائي عند الحاجة وخطة إسعاف للنوبات.', 'Asthma needs a clear controller/rescue plan and trigger awareness.', 'При астме нужен понятный план контролирующей и спасательной терапии.'),
    good: arr(['معرفة المحفزات مثل الغبار والدخان والعطور.', 'حمل بخاخ الإسعاف إذا وصفه الطبيب.', 'تعلم استخدام البخاخ بطريقة صحيحة.'], ['Know triggers such as dust, smoke, and perfumes.', 'Carry rescue inhaler if prescribed.', 'Learn correct inhaler technique.'], ['Знайте триггеры: пыль, дым, запахи.', 'Носите спасательный ингалятор, если назначен.', 'Освойте правильную технику ингаляции.']),
    avoid: arr(['التعرض للدخان.', 'ترك البخاخ الوقائي عند تحسن الأعراض دون استشارة.', 'استخدام بخاخ الإسعاف بشكل متكرر دون مراجعة.'], ['Smoke exposure.', 'Stopping controller inhaler when symptoms improve without advice.', 'Frequent rescue inhaler use without review.'], ['Избегайте дыма.', 'Не прекращайте базисный ингалятор без врача.', 'Частое использование спасательного ингалятора требует осмотра.']),
    urgent: arr(['ضيق نفس شديد لا يتحسن بالبخاخ.', 'زرقة الشفاه أو صعوبة الكلام.', 'نعاس أو إنهاك شديد أثناء النوبة.'], ['Severe breathlessness not improving with inhaler.', 'Blue lips or trouble speaking.', 'Drowsiness or exhaustion during attack.'], ['Сильная одышка без улучшения от ингалятора.', 'Синюшность губ или трудно говорить.', 'Сонливость или истощение во время приступа.']),
    questions: arr(['هل أحتاج بخاخ وقائي يومي؟', 'ما خطة النوبة؟', 'هل طريقة استخدام البخاخ صحيحة؟'], ['Do I need a daily controller inhaler?', 'What is my attack action plan?', 'Is my inhaler technique correct?'], ['Нужен ли ежедневный базисный ингалятор?', 'Какой план при приступе?', 'Правильно ли я пользуюсь ингалятором?'])
  },
  {
    id: 'heart_disease',
    category: tx('قلب وضغط', 'Cardiovascular', 'Сердечно-сосудистые'),
    name: tx('أمراض القلب والشرايين', 'Heart disease', 'Болезни сердца'),
    summary: tx('التركيز على الأعراض التحذيرية، الالتزام بالأدوية، وضبط الضغط والسكر والدهون.', 'Focus on warning symptoms, medication adherence, and control of BP, glucose, and cholesterol.', 'Важно знать тревожные симптомы, принимать лекарства и контролировать давление, сахар и липиды.'),
    good: arr(['متابعة الألم الصدري وتوقيت ظهوره.', 'تقليل التدخين ثم إيقافه بخطة.', 'حمل قائمة الأدوية دائمًا.'], ['Track chest symptoms and triggers.', 'Reduce and stop smoking with a plan.', 'Carry your medication list.'], ['Отслеживайте боль в груди и провокаторы.', 'Снижайте и прекращайте курение по плану.', 'Носите список лекарств.']),
    avoid: arr(['تجاهل ألم الصدر الجديد.', 'إيقاف مميعات الدم أو أدوية القلب دون طبيب.', 'المجهود الشديد عند ظهور أعراض.'], ['Ignoring new chest pain.', 'Stopping blood thinners or heart medicines without advice.', 'Heavy exertion during symptoms.'], ['Не игнорируйте новую боль в груди.', 'Не прекращайте антикоагулянты и сердечные лекарства без врача.', 'Не перегружайтесь при симптомах.']),
    urgent: arr(['ألم صدر ضاغط يمتد للذراع أو الفك.', 'ضيق نفس مفاجئ.', 'إغماء أو تعرق شديد مع ألم.'], ['Pressure-like chest pain radiating to arm or jaw.', 'Sudden shortness of breath.', 'Fainting or heavy sweating with pain.'], ['Сдавливающая боль в груди с отдачей в руку или челюсть.', 'Внезапная одышка.', 'Обморок или сильный пот с болью.']),
    questions: arr(['ما مستوى النشاط الآمن لي؟', 'هل أحتاج تخطيط أو إيكو؟', 'ما أعراض الطوارئ عندي؟'], ['What activity level is safe for me?', 'Do I need ECG or echo?', 'Which symptoms are emergencies for me?'], ['Какой уровень нагрузки безопасен?', 'Нужно ли ЭКГ или ЭхоКГ?', 'Какие симптомы для меня экстренные?'])
  },
  {
    id: 'gerd',
    category: tx('هضمي', 'Digestive', 'Пищеварительная система'),
    name: tx('ارتجاع المعدة', 'GERD / acid reflux', 'ГЭРБ / рефлюкс'),
    summary: tx('الارتجاع يتحسن غالبًا بتنظيم الأكل والنوم وتجنب المحفزات.', 'Reflux often improves with meal timing, sleep position, and trigger control.', 'Рефлюкс часто уменьшается при правильном режиме питания, сна и контроле триггеров.'),
    good: arr(['وجبات أصغر وتجنب النوم بعد الأكل مباشرة.', 'رفع رأس السرير عند الأعراض الليلية.', 'تسجيل الأطعمة التي تزيد الحموضة.'], ['Smaller meals and avoid lying down right after eating.', 'Elevate head of bed for night symptoms.', 'Track foods that worsen reflux.'], ['Меньшие порции и не ложиться сразу после еды.', 'Поднимайте изголовье при ночных симптомах.', 'Записывайте продукты-триггеры.']),
    avoid: arr(['الأكل المتأخر جدًا.', 'الإفراط في المقليات والنعناع والقهوة عند التحسس.', 'استخدام أدوية الحموضة طويلًا دون متابعة.'], ['Very late meals.', 'Excess fried foods, mint, or coffee if triggering.', 'Long-term acid medicine use without review.'], ['Очень поздние приемы пищи.', 'Жареное, мята, кофе при провокации.', 'Длительный прием препаратов от кислотности без контроля.']),
    urgent: arr(['صعوبة بلع متزايدة.', 'قيء دم أو براز أسود.', 'نقص وزن غير مفسر.'], ['Progressive trouble swallowing.', 'Vomiting blood or black stools.', 'Unexplained weight loss.'], ['Нарастающее затруднение глотания.', 'Рвота кровью или черный стул.', 'Необъяснимая потеря веса.']),
    questions: arr(['كم مدة العلاج المناسبة؟', 'هل أحتاج منظار؟', 'ما الأطعمة التي أبدأ بتجنبها؟'], ['How long should treatment continue?', 'Do I need endoscopy?', 'Which foods should I avoid first?'], ['Как долго лечиться?', 'Нужна ли гастроскопия?', 'Какие продукты исключить сначала?'])
  },
  {
    id: 'ibs',
    category: tx('هضمي', 'Digestive', 'Пищеварительная система'),
    name: tx('متلازمة القولون العصبي', 'Irritable bowel syndrome', 'Синдром раздраженного кишечника'),
    summary: tx('متلازمة وظيفية شائعة تتأثر بالتوتر ونوعية الطعام ونمط النوم.', 'A common functional syndrome affected by stress, food patterns, and sleep.', 'Распространенный функциональный синдром, связанный со стрессом, питанием и сном.'),
    good: arr(['تحديد محفزات الطعام تدريجيًا.', 'الألياف المناسبة حسب الإمساك أو الإسهال.', 'إدارة التوتر والنوم المنتظم.'], ['Identify food triggers gradually.', 'Use the right fiber approach for constipation or diarrhea.', 'Manage stress and regular sleep.'], ['Постепенно выявляйте пищевые триггеры.', 'Подбирайте клетчатку в зависимости от запора или диареи.', 'Контролируйте стресс и сон.']),
    avoid: arr(['إزالة مجموعات غذائية كثيرة دون خطة.', 'تجاهل نزف أو نقص وزن.', 'كثرة الملينات دون متابعة.'], ['Removing many food groups without a plan.', 'Ignoring bleeding or weight loss.', 'Frequent laxatives without review.'], ['Не исключайте много продуктов без плана.', 'Не игнорируйте кровь или похудение.', 'Не злоупотребляйте слабительными без контроля.']),
    urgent: arr(['دم في البراز.', 'نقص وزن أو حرارة مستمرة.', 'ألم يوقظك من النوم.'], ['Blood in stool.', 'Weight loss or persistent fever.', 'Pain waking you from sleep.'], ['Кровь в стуле.', 'Похудение или постоянная температура.', 'Боль, будящая ночью.']),
    questions: arr(['هل حالتي IBS أم أحتاج فحوصات؟', 'هل يناسبني نظام منخفض FODMAP؟', 'ما الخطة عند التهيج؟'], ['Is this IBS or do I need tests?', 'Is low-FODMAP suitable for me?', 'What is my flare plan?'], ['Это СРК или нужны обследования?', 'Подходит ли low-FODMAP?', 'Что делать при обострении?'])
  },
  {
    id: 'migraine',
    category: tx('أعصاب', 'Neurology', 'Неврология'),
    name: tx('الشقيقة / الصداع النصفي', 'Migraine', 'Мигрень'),
    summary: tx('الشقيقة تحتاج معرفة المحفزات وخطة علاج مبكرة عند بداية النوبة.', 'Migraine needs trigger tracking and early treatment at attack onset.', 'При мигрени важны триггеры и раннее лечение в начале приступа.'),
    good: arr(['تسجيل النوم، الطعام، الدورة، والتوتر مع النوبات.', 'شرب ماء كافٍ وانتظام النوم.', 'أخذ العلاج مبكرًا حسب وصف الطبيب.'], ['Track sleep, food, cycle, stress, and attacks.', 'Hydration and regular sleep.', 'Take treatment early as prescribed.'], ['Записывайте сон, питание, цикл, стресс и приступы.', 'Пейте воду и соблюдайте режим сна.', 'Принимайте лечение рано по назначению.']),
    avoid: arr(['الإفراط في المسكنات؛ قد يزيد الصداع.', 'تجاهل صداع جديد ومختلف.', 'السهر الطويل والجفاف.'], ['Overusing painkillers; it can worsen headaches.', 'Ignoring a new or different headache.', 'Long sleep deprivation and dehydration.'], ['Не злоупотребляйте обезболивающими — это усиливает головную боль.', 'Не игнорируйте новую необычную боль.', 'Недосып и обезвоживание.']),
    urgent: arr(['أسوأ صداع في الحياة فجأة.', 'صداع مع ضعف أو تشنج أو صعوبة كلام.', 'صداع بعد إصابة رأس.'], ['Sudden worst headache of life.', 'Headache with weakness, seizure, or speech trouble.', 'Headache after head injury.'], ['Внезапная самая сильная головная боль.', 'Головная боль со слабостью, судорогой или нарушением речи.', 'Головная боль после травмы головы.']),
    questions: arr(['هل أحتاج علاج وقائي؟', 'كم مرة أستطيع استخدام المسكن؟', 'ما علامات الطوارئ؟'], ['Do I need preventive treatment?', 'How often can I use pain medicine?', 'What are emergency signs?'], ['Нужно ли профилактическое лечение?', 'Как часто можно обезболивающее?', 'Какие признаки экстренные?'])
  },
  {
    id: 'anemia',
    category: tx('دم ومناعة', 'Blood', 'Кровь'),
    name: tx('فقر الدم', 'Anemia', 'Анемия'),
    summary: tx('فقر الدم له أسباب متعددة مثل نقص الحديد أو B12 أو أمراض مزمنة، ويحتاج معرفة السبب.', 'Anemia has multiple causes such as iron/B12 deficiency or chronic disease, so the cause matters.', 'У анемии много причин: дефицит железа/B12 или хронические болезни; важно найти причину.'),
    good: arr(['عمل تحاليل حسب الطبيب مثل CBC والحديد وB12.', 'تناول العلاج حسب السبب وليس عشوائيًا.', 'متابعة التعب، الدوخة، والخفقان.'], ['Test as advised: CBC, iron studies, B12.', 'Treat based on cause, not randomly.', 'Track fatigue, dizziness, palpitations.'], ['Сдайте анализы по назначению: ОАК, железо, B12.', 'Лечите причину, не случайно.', 'Следите за усталостью, головокружением, сердцебиением.']),
    avoid: arr(['أخذ الحديد دون تأكيد السبب.', 'تجاهل نزف الدورة الشديد أو نزف الجهاز الهضمي.', 'إيقاف العلاج مبكرًا.'], ['Taking iron without confirming cause.', 'Ignoring heavy periods or GI bleeding.', 'Stopping treatment early.'], ['Не принимайте железо без подтверждения причины.', 'Не игнорируйте обильные месячные или ЖКТ-кровотечение.', 'Не прекращайте лечение рано.']),
    urgent: arr(['ضيق نفس شديد أو ألم صدر.', 'إغماء أو خفقان شديد.', 'براز أسود أو قيء دم.'], ['Severe shortness of breath or chest pain.', 'Fainting or severe palpitations.', 'Black stool or vomiting blood.'], ['Сильная одышка или боль в груди.', 'Обморок или сильное сердцебиение.', 'Черный стул или рвота кровью.']),
    questions: arr(['ما سبب فقر الدم لدي؟', 'هل أحتاج حديد أم B12؟', 'متى أعيد التحليل؟'], ['What is the cause of my anemia?', 'Do I need iron or B12?', 'When should I repeat tests?'], ['Какая причина анемии?', 'Нужно ли железо или B12?', 'Когда повторить анализы?'])
  },
  {
    id: 'thyroid_hypo',
    category: tx('غدد وسكري', 'Endocrine', 'Эндокринология'),
    name: tx('قصور الغدة الدرقية', 'Hypothyroidism', 'Гипотиреоз'),
    summary: tx('قصور الدرقية يحتاج جرعة منتظمة ومتابعة TSH لتعديل العلاج.', 'Hypothyroidism needs consistent dosing and TSH monitoring.', 'Гипотиреоз требует регулярного приема и контроля ТТГ.'),
    good: arr(['أخذ الدواء صباحًا على معدة فارغة غالبًا حسب وصف الطبيب.', 'إبعاد الحديد والكالسيوم عن دواء الدرقية عدة ساعات.', 'إعادة التحليل بعد تعديل الجرعة.'], ['Take medicine consistently, often morning on empty stomach as prescribed.', 'Separate iron/calcium from thyroid medicine by several hours.', 'Repeat labs after dose changes.'], ['Принимайте препарат регулярно, часто утром натощак по назначению.', 'Разносите железо/кальций и тироксин на несколько часов.', 'Повторяйте анализы после изменения дозы.']),
    avoid: arr(['تغيير الجرعة بسبب التعب فقط دون تحليل.', 'نسيان الدواء المتكرر.', 'أخذ المكملات مع الدواء مباشرة.'], ['Changing dose based only on fatigue without labs.', 'Frequent missed doses.', 'Taking supplements directly with medicine.'], ['Не меняйте дозу только из-за усталости без анализов.', 'Не пропускайте часто.', 'Не принимайте добавки сразу с лекарством.']),
    urgent: arr(['نعاس شديد جدًا مع برودة وبطء نبض.', 'تورم شديد أو ضيق نفس.', 'أعراض قلبية جديدة.'], ['Extreme sleepiness with coldness and slow pulse.', 'Severe swelling or shortness of breath.', 'New heart symptoms.'], ['Сильная сонливость, холод, редкий пульс.', 'Сильные отеки или одышка.', 'Новые сердечные симптомы.']),
    questions: arr(['ما هدف TSH المناسب لي؟', 'كيف أتعامل مع نسيان الجرعة؟', 'هل الأعراض من الغدة أم سبب آخر؟'], ['What TSH target is right for me?', 'What should I do if I miss a dose?', 'Are symptoms thyroid-related or another cause?'], ['Какой целевой ТТГ?', 'Что делать при пропуске дозы?', 'Симптомы от щитовидки или другая причина?'])
  },
  {
    id: 'arthritis',
    category: tx('عظام ومفاصل', 'Joints & bones', 'Суставы и кости'),
    name: tx('التهاب/خشونة المفاصل', 'Arthritis / joint pain', 'Артрит / боль в суставах'),
    summary: tx('آلام المفاصل تختلف أسبابها؛ المهم حماية الحركة وتقليل الألم دون أذية المعدة أو الكلى.', 'Joint pain has many causes; protect movement and reduce pain safely.', 'У боли в суставах много причин; важно сохранять движение и безопасно снижать боль.'),
    good: arr(['تمارين لطيفة ومدى حركة حسب القدرة.', 'تخفيف الوزن إذا كان يزيد ألم الركبة أو الظهر.', 'كمادات دافئة/باردة حسب ما يريحك.'], ['Gentle movement and range-of-motion exercises.', 'Weight reduction if it worsens knee/back pain.', 'Heat/cold packs depending on relief.'], ['Мягкие упражнения и движение суставов.', 'Снижение веса при боли коленей/спины.', 'Тепло/холод по переносимости.']),
    avoid: arr(['الإفراط في NSAIDs دون متابعة.', 'الراحة التامة الطويلة.', 'حقن أو علاجات شعبية غير معروفة.'], ['Excess NSAIDs without monitoring.', 'Long complete rest.', 'Unknown injections or folk treatments.'], ['Не злоупотребляйте НПВС без контроля.', 'Не лежите долго полностью без движения.', 'Осторожно с неизвестными инъекциями и народными методами.']),
    urgent: arr(['مفصل أحمر حار متورم مع حرارة.', 'ألم بعد سقوط أو تشوه.', 'ضعف أو خدر جديد.'], ['Red hot swollen joint with fever.', 'Pain after fall or deformity.', 'New weakness or numbness.'], ['Красный горячий опухший сустав с температурой.', 'Боль после падения или деформация.', 'Новая слабость или онемение.']),
    questions: arr(['هل السبب خشونة أم التهاب مناعي؟', 'ما التمارين المناسبة؟', 'ما المسكن الآمن لي؟'], ['Is it osteoarthritis or inflammatory arthritis?', 'Which exercises are suitable?', 'Which pain relief is safe for me?'], ['Это остеоартроз или воспалительный артрит?', 'Какие упражнения подходят?', 'Какое обезболивание безопасно?'])
  },
  {
    id: 'epilepsy',
    category: tx('أعصاب', 'Neurology', 'Неврология'),
    name: tx('الصرع / التشنجات', 'Epilepsy / seizures', 'Эпилепсия / судороги'),
    summary: tx('الانتظام في العلاج وتجنب المحفزات يقلل النوبات ويحسن الأمان.', 'Medication consistency and trigger avoidance reduce seizures and improve safety.', 'Регулярный прием и избегание триггеров снижают приступы и повышают безопасность.'),
    good: arr(['عدم تفويت الجرعات.', 'نوم كافٍ وتجنب السهر.', 'إخبار العائلة بخطة التصرف أثناء النوبة.'], ['Do not miss doses.', 'Adequate sleep and avoid sleep deprivation.', 'Teach family seizure first aid.'], ['Не пропускайте дозы.', 'Достаточный сон, избегайте недосыпа.', 'Научите семью помощи при приступе.']),
    avoid: arr(['إيقاف الدواء فجأة.', 'القيادة إذا لم يسمح الطبيب.', 'وضع شيء في فم المصاب أثناء النوبة.'], ['Stopping medication suddenly.', 'Driving unless cleared by clinician/law.', 'Putting objects in the mouth during a seizure.'], ['Не прекращайте препарат резко.', 'Не водите без разрешения врача/закона.', 'Не кладите предметы в рот во время приступа.']),
    urgent: arr(['نوبة أكثر من 5 دقائق.', 'تكرر النوبات دون وعي كامل بينها.', 'نوبة مع إصابة أو حمل أو سكري.'], ['Seizure lasting more than 5 minutes.', 'Repeated seizures without full recovery.', 'Seizure with injury, pregnancy, or diabetes.'], ['Приступ более 5 минут.', 'Повторные приступы без восстановления.', 'Приступ с травмой, беременностью или диабетом.']),
    questions: arr(['متى أراجع جرعة الدواء؟', 'ما المحفزات الخاصة بي؟', 'هل أحتاج سوار معلومات طبية؟'], ['When should my dose be reviewed?', 'What are my triggers?', 'Do I need a medical ID bracelet?'], ['Когда пересматривать дозу?', 'Какие мои триггеры?', 'Нужен ли медицинский браслет?'])
  },
  {
    id: 'pcos',
    category: tx('نساء وغدد', 'Women & endocrine', 'Женское здоровье'),
    name: tx('متلازمة تكيس المبايض', 'Polycystic ovary syndrome', 'Синдром поликистозных яичников'),
    summary: tx('PCOS قد تؤثر على الدورة، الشعر، البشرة، الوزن، ومقاومة الإنسولين.', 'PCOS can affect cycles, hair, skin, weight, and insulin resistance.', 'СПКЯ влияет на цикл, волосы, кожу, вес и инсулинорезистентность.'),
    good: arr(['تسجيل الدورة والأعراض.', 'متابعة السكر والدهون إذا طلب الطبيب.', 'نشاط بدني وتغذية متوازنة لتحسين مقاومة الإنسولين.'], ['Track cycles and symptoms.', 'Check glucose/lipids if advised.', 'Physical activity and balanced nutrition help insulin resistance.'], ['Отслеживайте цикл и симптомы.', 'Проверяйте сахар/липиды по назначению.', 'Активность и питание помогают инсулинорезистентности.']),
    avoid: arr(['علاج الهرمونات أو المنشطات دون طبيب.', 'تجاهل انقطاع الدورة الطويل.', 'الاعتماد على المكملات فقط.'], ['Hormones or fertility drugs without clinician.', 'Ignoring long absent periods.', 'Relying only on supplements.'], ['Не принимайте гормоны или стимуляторы без врача.', 'Не игнорируйте длительное отсутствие месячных.', 'Не полагайтесь только на добавки.']),
    urgent: arr(['نزف شديد جدًا.', 'ألم حوض حاد مفاجئ.', 'اختبار حمل إيجابي مع ألم أو نزف.'], ['Very heavy bleeding.', 'Sudden severe pelvic pain.', 'Positive pregnancy test with pain or bleeding.'], ['Очень сильное кровотечение.', 'Внезапная сильная боль в тазу.', 'Положительный тест на беременность с болью или кровью.']),
    questions: arr(['هل أحتاج فحوصات هرمونات أو سكر؟', 'ما الخطة إذا أريد حمل؟', 'كيف أعالج اضطراب الدورة؟'], ['Do I need hormone or glucose tests?', 'What is the plan if I want pregnancy?', 'How should irregular cycles be managed?'], ['Нужны ли гормоны или сахар?', 'Какой план при желании беременности?', 'Как лечить нерегулярный цикл?'])
  },
  {
    id: 'metabolic_syndrome',
    category: tx('غدد وسكري', 'Metabolic', 'Метаболические'),
    name: tx('متلازمة الأيض', 'Metabolic syndrome', 'Метаболический синдром'),
    summary: tx('مجموعة عوامل مثل زيادة محيط الخصر، الضغط، السكر، والدهون تزيد خطر القلب والسكري.', 'A cluster of waist, BP, glucose, and lipid risks that increase diabetes and heart risk.', 'Комплекс факторов: талия, давление, сахар, липиды — повышают риск диабета и сердца.'),
    good: arr(['متابعة الوزن ومحيط الخصر.', 'نشاط منتظم تدريجي.', 'تحسين النوم وتقليل التدخين والسكر.'], ['Track weight and waist.', 'Gradual regular activity.', 'Improve sleep, reduce smoking and sugar.'], ['Следите за весом и талией.', 'Постепенная регулярная активность.', 'Сон, меньше курения и сахара.']),
    avoid: arr(['التركيز على الوزن فقط ونسيان الضغط والدهون.', 'الحمية القاسية غير المستمرة.', 'إهمال الشخير وانقطاع النفس أثناء النوم.'], ['Focusing only on weight while ignoring BP/lipids.', 'Extreme unsustainable diets.', 'Ignoring snoring and sleep apnea signs.'], ['Не смотрите только на вес, игнорируя давление/липиды.', 'Избегайте жестких краткосрочных диет.', 'Не игнорируйте храп и апноэ сна.']),
    urgent: arr(['ألم صدر أو ضيق نفس.', 'سكر شديد الارتفاع مع أعراض.', 'ضغط شديد مع أعراض عصبية.'], ['Chest pain or shortness of breath.', 'Very high glucose with symptoms.', 'Very high BP with neurological symptoms.'], ['Боль в груди или одышка.', 'Очень высокий сахар с симптомами.', 'Очень высокое давление с неврологическими симптомами.']),
    questions: arr(['ما أهم رقم يجب أبدأ بتحسينه؟', 'هل أحتاج دواء للدهون أو السكر؟', 'هل عندي خطر انقطاع النفس النومي؟'], ['Which number should I improve first?', 'Do I need cholesterol or glucose medicine?', 'Am I at risk for sleep apnea?'], ['Какой показатель улучшать первым?', 'Нужны ли лекарства от липидов или сахара?', 'Есть ли риск апноэ сна?'])
  },
  {
    id: 'depression_anxiety',
    category: tx('صحة نفسية', 'Mental health', 'Психическое здоровье'),
    name: tx('القلق والاكتئاب', 'Anxiety and depression', 'Тревога и депрессия'),
    summary: tx('الصحة النفسية جزء من الصحة العامة، وطلب المساعدة مبكرًا يحسن النتائج.', 'Mental health is part of overall health; early support improves outcomes.', 'Психическое здоровье — часть общего здоровья; ранняя помощь улучшает исход.'),
    good: arr(['التحدث مع مختص أو شخص موثوق.', 'تنظيم النوم والحركة اليومية البسيطة.', 'تسجيل الأعراض وما يزيدها أو يخففها.'], ['Talk to a professional or trusted person.', 'Regular sleep and simple daily movement.', 'Track symptoms and triggers/relievers.'], ['Поговорите со специалистом или доверенным человеком.', 'Сон и простая ежедневная активность.', 'Записывайте симптомы и триггеры.']),
    avoid: arr(['العزلة الكاملة.', 'إيقاف أدوية نفسية فجأة.', 'استخدام الكحول أو المهدئات دون وصفة للتعامل مع القلق.'], ['Complete isolation.', 'Stopping psychiatric medicines suddenly.', 'Using alcohol or sedatives without prescription to cope.'], ['Полная изоляция.', 'Резкая отмена психиатрических препаратов.', 'Алкоголь или седативные без назначения для тревоги.']),
    urgent: arr(['أفكار بإيذاء النفس أو الآخرين.', 'هلع شديد مع ألم صدر أو إغماء.', 'أرق شديد مستمر مع تدهور واضح.'], ['Thoughts of self-harm or harming others.', 'Severe panic with chest pain or fainting.', 'Persistent severe insomnia with clear decline.'], ['Мысли о самоповреждении или вреде другим.', 'Сильная паника с болью в груди или обмороком.', 'Стойкая тяжелая бессонница с ухудшением.']),
    questions: arr(['هل أحتاج علاجًا نفسيًا أو دواء؟', 'متى يظهر مفعول العلاج؟', 'ما خطة الطوارئ إذا ساءت الأفكار؟'], ['Do I need therapy or medication?', 'When should treatment start working?', 'What is my safety plan if thoughts worsen?'], ['Нужна ли психотерапия или лекарства?', 'Когда ждать эффект?', 'Какой план безопасности при ухудшении мыслей?'])
  },
  {
    id: 'allergy',
    category: tx('حساسية ومناعة', 'Allergy & immune', 'Аллергия и иммунитет'),
    name: tx('الحساسية', 'Allergies', 'Аллергия'),
    summary: tx('الحساسية قد تكون بسيطة أو خطيرة؛ المهم معرفة المحفزات وخطة الطوارئ.', 'Allergies can be mild or severe; know triggers and emergency plan.', 'Аллергия может быть легкой или опасной; важны триггеры и план экстренной помощи.'),
    good: arr(['تسجيل المواد أو الأطعمة المسببة.', 'حمل أدوية الحساسية أو الإبينفرين إذا وصف.', 'قراءة مكونات الطعام والدواء.'], ['Record triggering foods/substances.', 'Carry allergy medicine or epinephrine if prescribed.', 'Read food and medicine ingredients.'], ['Записывайте продукты/вещества-триггеры.', 'Носите лекарства или адреналин, если назначен.', 'Читайте состав еды и лекарств.']),
    avoid: arr(['تجربة طعام سبب حساسية شديدة سابقًا.', 'تجاهل تورم الشفاه أو اللسان.', 'استخدام مضاد حيوي سبب طفحًا شديدًا دون إخبار الطبيب.'], ['Trying foods that previously caused severe allergy.', 'Ignoring lip or tongue swelling.', 'Using antibiotics that caused severe rash without telling doctor.'], ['Не пробуйте продукт, вызвавший тяжелую аллергию.', 'Не игнорируйте отек губ или языка.', 'Сообщайте врачу о тяжелой реакции на антибиотики.']),
    urgent: arr(['صعوبة تنفس أو صفير.', 'تورم اللسان أو الحلق.', 'دوخة أو إغماء مع طفح.'], ['Breathing difficulty or wheeze.', 'Tongue or throat swelling.', 'Dizziness or fainting with rash.'], ['Затруднение дыхания или свист.', 'Отек языка или горла.', 'Головокружение или обморок с сыпью.']),
    questions: arr(['هل أحتاج اختبار حساسية؟', 'هل أحتاج قلم إبينفرين؟', 'ما البدائل الآمنة للأدوية؟'], ['Do I need allergy testing?', 'Do I need an epinephrine auto-injector?', 'What safe medicine alternatives exist?'], ['Нужны ли аллергопробы?', 'Нужен ли автоинъектор адреналина?', 'Какие безопасные замены лекарств?'])
  },
  {
    id: 'celiac',
    category: tx('هضمي ومناعة', 'Digestive & immune', 'Пищеварение и иммунитет'),
    name: tx('الداء البطني / حساسية القمح', 'Celiac disease', 'Целиакия'),
    summary: tx('حالة مناعية تتطلب تجنب الغلوتين بشكل صارم بعد التشخيص.', 'An immune condition requiring strict gluten avoidance after diagnosis.', 'Иммунное заболевание, требующее строгого исключения глютена после диагноза.'),
    good: arr(['قراءة الملصقات والبحث عن الغلوتين المخفي.', 'متابعة الحديد وB12 وفيتامين D حسب الطبيب.', 'فصل أدوات الطبخ لتجنب التلوث.'], ['Read labels for hidden gluten.', 'Monitor iron, B12, vitamin D as advised.', 'Separate cooking tools to avoid contamination.'], ['Читайте состав на скрытый глютен.', 'Контроль железа, B12, витамина D.', 'Разделяйте кухонные принадлежности от загрязнения.']),
    avoid: arr(['بدء حمية خالية من الغلوتين قبل الفحوصات دون نصيحة.', 'الخبز والمعكرونة العادية.', 'التلوث المتبادل في المطاعم.'], ['Starting gluten-free diet before testing without advice.', 'Regular bread and pasta.', 'Cross-contamination in restaurants.'], ['Не начинайте безглютеновую диету до анализов без врача.', 'Обычный хлеб и паста.', 'Перекрестное загрязнение в ресторанах.']),
    urgent: arr(['إسهال شديد مع جفاف.', 'نقص وزن واضح.', 'فقر دم شديد أو دوخة مستمرة.'], ['Severe diarrhea with dehydration.', 'Significant weight loss.', 'Severe anemia or persistent dizziness.'], ['Сильная диарея с обезвоживанием.', 'Значительное похудение.', 'Тяжелая анемия или постоянное головокружение.']),
    questions: arr(['هل التشخيص مؤكد بالتحاليل؟', 'ما الأغذية الآمنة؟', 'متى أعيد فحوصات النقص؟'], ['Is diagnosis confirmed by testing?', 'Which foods are safe?', 'When should deficiency labs be repeated?'], ['Диагноз подтвержден анализами?', 'Какие продукты безопасны?', 'Когда повторить анализы дефицитов?'])
  },
  {
    id: 'kidney',
    category: tx('كلى ومسالك', 'Kidney & urinary', 'Почки и мочевые пути'),
    name: tx('مرض الكلى المزمن', 'Chronic kidney disease', 'Хроническая болезнь почек'),
    summary: tx('لم يعد التطبيق مخصصًا للكلى فقط، لكن مرضى الكلى سيجدون معلوماتهم مباشرة إذا اختاروا هذا المرض.', 'The app is not kidney-specific anymore, but kidney patients see targeted guidance when selected.', 'Приложение больше не только для почек, но пациенты с ХБП видят нужные рекомендации при выборе.'),
    good: arr(['متابعة الكرياتينين/eGFR والبول حسب الطبيب.', 'ضبط الضغط والسكر.', 'تعديل البروتين والصوديوم والبوتاسيوم حسب التحاليل.'], ['Track creatinine/eGFR and urine tests as advised.', 'Control blood pressure and glucose.', 'Adjust protein, sodium, potassium based on labs.'], ['Контроль креатинина/eGFR и мочи.', 'Контроль давления и сахара.', 'Коррекция белка, натрия, калия по анализам.']),
    avoid: arr(['بدائل الملح الغنية بالبوتاسيوم.', 'NSAIDs دون موافقة الطبيب.', 'حمية قاسية دون اختصاصي تغذية كلوية.'], ['Potassium-based salt substitutes.', 'NSAIDs without clinician approval.', 'Extreme diet without renal dietitian guidance.'], ['Заменители соли с калием.', 'НПВС без разрешения врача.', 'Жесткие диеты без нефро-диетолога.']),
    urgent: arr(['نقص واضح في البول.', 'ضيق نفس أو تورم شديد.', 'خفقان مع ارتفاع بوتاسيوم.'], ['Marked drop in urine.', 'Shortness of breath or severe swelling.', 'Palpitations with high potassium.'], ['Резкое снижение мочи.', 'Одышка или сильные отеки.', 'Сердцебиение при высоком калии.']),
    questions: arr(['ما مرحلة CKD عندي؟', 'هل أحتاج تقييد بوتاسيوم أو فوسفور؟', 'ما الأدوية التي أتجنبها؟'], ['What CKD stage do I have?', 'Do I need potassium or phosphorus restriction?', 'Which medicines should I avoid?'], ['Какая стадия ХБП?', 'Нужно ли ограничивать калий или фосфор?', 'Какие лекарства избегать?'])
  },
  {
    id: 'autism',
    category: tx('أطفال ونمو', 'Developmental', 'Развитие'),
    name: tx('اضطراب طيف التوحد', 'Autism spectrum disorder', 'Расстройство аутистического спектра'),
    summary: tx('اضطراب نمائي يحتاج دعمًا فرديًا في التواصل، السلوك، والحساسيات الحسية.', 'A developmental condition needing individualized support for communication, behavior, and sensory needs.', 'Нейроразвитийное состояние, требующее индивидуальной поддержки общения, поведения и сенсорики.'),
    good: arr(['روتين واضح وصور أو جداول عند الحاجة.', 'تقييم النطق والسمع والسلوك.', 'دعم الأسرة والمدرسة بخطة مشتركة.'], ['Clear routines and visual schedules when useful.', 'Speech, hearing, and behavioral assessment.', 'Family-school support plan.'], ['Четкий режим и визуальные расписания.', 'Оценка речи, слуха и поведения.', 'Совместный план семьи и школы.']),
    avoid: arr(['لوم الطفل أو الأسرة.', 'العلاجات غير المثبتة أو المكلفة بلا دليل.', 'تجاهل مشاكل النوم أو الأكل الشديدة.'], ['Blaming the child or family.', 'Unproven expensive treatments.', 'Ignoring severe sleep or feeding issues.'], ['Не обвиняйте ребенка или семью.', 'Осторожно с недоказанными дорогими методами.', 'Не игнорируйте тяжелые проблемы сна/еды.']),
    urgent: arr(['إيذاء النفس أو الآخرين.', 'تدهور مفاجئ في المهارات.', 'نوبات تشنج أو فقدان وعي.'], ['Self-harm or harm to others.', 'Sudden regression of skills.', 'Seizures or loss of consciousness.'], ['Самоповреждение или вред другим.', 'Внезапный регресс навыков.', 'Судороги или потеря сознания.']),
    questions: arr(['ما التدخلات المناسبة لعمر الطفل؟', 'هل يحتاج علاج نطق أو وظيفي؟', 'كيف أتعامل مع الانهيارات السلوكية؟'], ['Which interventions fit the child’s age?', 'Does the child need speech or occupational therapy?', 'How should meltdowns be managed?'], ['Какие вмешательства подходят возрасту?', 'Нужна ли логопедия или эрготерапия?', 'Как справляться с перегрузками?'])
  },
  {
    id: 'down_syndrome',
    category: tx('أطفال ومتلازمات', 'Syndromes', 'Синдромы'),
    name: tx('متلازمة داون', 'Down syndrome', 'Синдром Дауна'),
    summary: tx('متلازمة وراثية تحتاج متابعة نمو، قلب، سمع، نظر، وغدة درقية حسب العمر.', 'A genetic syndrome needing age-based monitoring of development, heart, hearing, vision, and thyroid.', 'Генетический синдром, требующий контроля развития, сердца, слуха, зрения и щитовидки.'),
    good: arr(['متابعة دورية مع طبيب أطفال.', 'فحوص السمع والنظر والدرقية حسب الجدول.', 'دعم النطق والعلاج الوظيفي مبكرًا.'], ['Regular pediatric follow-up.', 'Hearing, vision, and thyroid screening as scheduled.', 'Early speech and occupational support.'], ['Регулярное наблюдение у педиатра.', 'Слух, зрение, щитовидка по графику.', 'Ранняя логопедия и эрготерапия.']),
    avoid: arr(['تأخير التدخل المبكر.', 'تجاهل الشخير أو توقف النفس أثناء النوم.', 'إهمال الإمساك أو مشاكل الأكل.'], ['Delaying early intervention.', 'Ignoring snoring or sleep apnea signs.', 'Ignoring constipation or feeding problems.'], ['Не откладывайте раннюю помощь.', 'Не игнорируйте храп или апноэ.', 'Не игнорируйте запор или проблемы кормления.']),
    urgent: arr(['زرقة أو ضيق نفس عند الرضيع.', 'خمول شديد أو ضعف رضاعة.', 'أعراض عصبية أو تشنجات.'], ['Blue color or breathing difficulty in infant.', 'Severe lethargy or poor feeding.', 'Neurological symptoms or seizures.'], ['Синюшность или одышка у младенца.', 'Сильная вялость или плохое кормление.', 'Неврологические симптомы или судороги.']),
    questions: arr(['ما فحوص المتابعة حسب العمر؟', 'هل القلب طبيعي؟', 'ما خدمات التدخل المبكر المتاحة؟'], ['Which screenings are needed by age?', 'Is the heart normal?', 'Which early intervention services are available?'], ['Какие обследования по возрасту?', 'Нормально ли сердце?', 'Какие службы ранней помощи доступны?'])
  },
  {
    id: 'gout',
    category: tx('مفاصل واستقلاب', 'Joints & metabolic', 'Суставы и обмен'),
    name: tx('النقرس', 'Gout', 'Подагра'),
    summary: tx('النقرس نوبات ألم مفصلية بسبب ارتفاع حمض اليوريك، وله علاج للنوبات والوقاية.', 'Gout causes painful joint attacks from uric acid; it has attack and prevention plans.', 'Подагра вызывает болезненные приступы из-за мочевой кислоты; нужны план приступа и профилактика.'),
    good: arr(['شرب سوائل مناسبة إذا لا يوجد منع طبي.', 'متابعة حمض اليوريك.', 'خطة واضحة للنوبة والوقاية.'], ['Hydrate appropriately if not restricted.', 'Monitor uric acid.', 'Have a clear flare and prevention plan.'], ['Пейте достаточно, если нет ограничений.', 'Контроль мочевой кислоты.', 'План при приступе и профилактике.']),
    avoid: arr(['الإكثار من اللحوم الحمراء والأعضاء.', 'إيقاف دواء خفض اليوريك أثناء النوبة دون توجيه.', 'كثرة الكحول أو المشروبات المحلاة.'], ['Excess red meat and organ meats.', 'Stopping urate-lowering medicine during flare without advice.', 'Alcohol or sugary drinks excess.'], ['Избыток красного мяса и субпродуктов.', 'Не отменяйте препараты от мочевой кислоты при приступе без врача.', 'Избыток алкоголя и сладких напитков.']),
    urgent: arr(['مفصل حار متورم مع حرارة.', 'ألم شديد أول مرة.', 'مرض كلى مع نوبة شديدة.'], ['Hot swollen joint with fever.', 'First-ever severe attack.', 'Kidney disease with severe flare.'], ['Горячий опухший сустав с температурой.', 'Первый сильный приступ.', 'ХБП с тяжелым приступом.']),
    questions: arr(['ما هدف حمض اليوريك؟', 'ما دواء النوبة الآمن لي؟', 'هل أحتاج علاج وقائي دائم؟'], ['What uric acid target should I reach?', 'Which flare medicine is safe for me?', 'Do I need long-term prevention?'], ['Какой целевой уровень мочевой кислоты?', 'Какое лечение приступа безопасно?', 'Нужна ли постоянная профилактика?'])
  },
  {
    id: 'sleep_apnea',
    category: tx('نوم وتنفس', 'Sleep & breathing', 'Сон и дыхание'),
    name: tx('انقطاع النفس أثناء النوم', 'Sleep apnea', 'Апноэ сна'),
    summary: tx('الشخير مع توقف النفس والنعاس قد يشير إلى انقطاع النفس ويؤثر على الضغط والقلب.', 'Snoring with pauses and daytime sleepiness may indicate sleep apnea affecting BP and heart.', 'Храп с паузами и дневной сонливостью может быть апноэ, влияющим на давление и сердце.'),
    good: arr(['إبلاغ الطبيب عن الشخير والنعاس.', 'إنقاص الوزن إذا كان مناسبًا.', 'النوم على الجانب وتجنب المهدئات غير الموصوفة.'], ['Tell your clinician about snoring and sleepiness.', 'Weight reduction if appropriate.', 'Side sleeping and avoid non-prescribed sedatives.'], ['Сообщите врачу о храпе и сонливости.', 'Снижение веса при необходимости.', 'Сон на боку, избегайте седативных без назначения.']),
    avoid: arr(['القيادة عند النعاس الشديد.', 'تجاهل توقف النفس الذي يلاحظه الأهل.', 'الكحول أو المهدئات قبل النوم.'], ['Driving when very sleepy.', 'Ignoring witnessed breathing pauses.', 'Alcohol or sedatives before sleep.'], ['Не водите при сильной сонливости.', 'Не игнорируйте паузы дыхания.', 'Алкоголь/седативные перед сном.']),
    urgent: arr(['نعاس يسبب حوادث أو شبه حوادث.', 'ضيق نفس ليلي شديد.', 'ألم صدر أو خفقان ليلي.'], ['Sleepiness causing accidents or near-accidents.', 'Severe night breathlessness.', 'Night chest pain or palpitations.'], ['Сонливость с авариями или почти авариями.', 'Сильная ночная одышка.', 'Ночная боль в груди или сердцебиение.']),
    questions: arr(['هل أحتاج دراسة نوم؟', 'هل CPAP مناسب لي؟', 'كيف يؤثر على الضغط؟'], ['Do I need a sleep study?', 'Is CPAP suitable for me?', 'How does it affect BP?'], ['Нужно ли исследование сна?', 'Подходит ли CPAP?', 'Как влияет на давление?'])
  }
];



// -----------------------------------------------------------------------------
// Expanded general disease library. The app now behaves like a broad disease
// guide: every disease card opens a full patient page with safety, danger signs,
// diet, good/bad foods, and breakfast/lunch/dinner recipe ideas.
// -----------------------------------------------------------------------------
const commonDiet = {
  ar: {
    safeFoods: ['ماء وسوائل حسب الحاجة الطبية', 'خضار وفواكه مناسبة للحالة', 'حبوب كاملة أو نشويات بسيطة حسب المرض', 'بروتينات طازجة غير مصنّعة', 'زيت زيتون وأطعمة قليلة الملح والسكر'],
    badFoods: ['أطعمة فائقة التصنيع', 'مشروبات الطاقة والمشروبات السكرية', 'الملح الزائد والمخللات', 'الدهون المتحولة والمقليات اليومية', 'أي طعام يسبب أعراضًا مثبتة عند المريض'],
    diet: ['اجعل الوجبات منتظمة ومتوازنة.', 'اختر أكلًا طازجًا قدر الإمكان.', 'راقب الأعراض بعد الأطعمة وسجلها.', 'عدّل الخطة مع الطبيب إذا لديك حمل، كلى، كبد، قلب، سكري، أو حساسية.'],
    recipes: {
      breakfast: ['شوفان أو خبز كامل مع بيض/لبنة قليلة الملح حسب الحالة', 'زبادي طبيعي مع فاكهة مناسبة', 'ساندويتش دجاج/جبن قليل الملح مع خضار'],
      lunch: ['دجاج مشوي مع رز/بطاطا وخضار مناسبة', 'سمك مشوي مع سلطة وكمية نشويات مناسبة', 'شوربة منزلية قليلة الملح مع بروتين طازج'],
      dinner: ['سلطة بروتين خفيفة', 'بيض أو تونة/دجاج مع خضار', 'شوربة خفيفة منزلية بدون ملح زائد']
    }
  },
  en: {
    safeFoods: ['Water/fluids as medically appropriate', 'Condition-appropriate fruits and vegetables', 'Whole grains or simple starches depending on the condition', 'Fresh non-processed proteins', 'Olive oil and low-salt/low-sugar foods'],
    badFoods: ['Ultra-processed foods', 'Energy drinks and sugary drinks', 'Excess salt and pickles', 'Trans fats and daily fried foods', 'Any food that reliably triggers symptoms'],
    diet: ['Keep meals regular and balanced.', 'Choose fresh food when possible.', 'Track symptoms after meals.', 'Adjust the plan with a clinician if pregnant or living with kidney, liver, heart disease, diabetes, or allergies.'],
    recipes: {
      breakfast: ['Oats or whole-grain toast with egg/low-salt dairy as appropriate', 'Plain yogurt with suitable fruit', 'Chicken/low-salt cheese sandwich with vegetables'],
      lunch: ['Grilled chicken with rice/potato and suitable vegetables', 'Grilled fish with salad and appropriate starch', 'Low-salt homemade soup with fresh protein'],
      dinner: ['Light protein salad', 'Egg or tuna/chicken with vegetables', 'Light homemade low-salt soup']
    }
  },
  ru: {
    safeFoods: ['Вода/жидкость по медицинским рекомендациям', 'Фрукты и овощи, подходящие состоянию', 'Цельные крупы или простые крахмалы по состоянию', 'Свежий необработанный белок', 'Оливковое масло и еда с меньшим количеством соли/сахара'],
    badFoods: ['Ультрапереработанные продукты', 'Энергетики и сладкие напитки', 'Избыток соли и соленья', 'Трансжиры и ежедневная жареная еда', 'Любая еда, стабильно вызывающая симптомы'],
    diet: ['Питайтесь регулярно и сбалансированно.', 'Выбирайте свежие продукты, когда возможно.', 'Отслеживайте симптомы после еды.', 'Корректируйте план с врачом при беременности, болезнях почек, печени, сердца, диабете или аллергиях.'],
    recipes: {
      breakfast: ['Овсянка или цельнозерновой тост с яйцом/молочным продуктом с низкой солью по состоянию', 'Натуральный йогурт с подходящими фруктами', 'Сэндвич с курицей/низкосоленым сыром и овощами'],
      lunch: ['Курица гриль с рисом/картофелем и подходящими овощами', 'Рыба гриль с салатом и подходящим гарниром', 'Домашний суп с низким содержанием соли и свежим белком'],
      dinner: ['Легкий белковый салат', 'Яйцо или тунец/курица с овощами', 'Легкий домашний суп без избытка соли']
    }
  }
};

const categoryProfiles = {
  metabolic: {
    safeFoods: arr(['خضار غير نشوية، بقول/حبوب بكمية محسوبة، بروتينات خفيفة، فاكهة كاملة بدل العصير.'], ['Non-starchy vegetables, measured legumes/grains, lean proteins, whole fruit instead of juice.'], ['Некрахмалистые овощи, умеренно бобовые/крупы, нежирный белок, цельные фрукты вместо сока.']),
    badFoods: arr(['مشروبات محلاة، حلويات يومية، كربوهيدرات كبيرة بلا بروتين، وجبات سريعة عالية السعرات.'], ['Sugary drinks, daily sweets, large carb portions without protein, high-calorie fast food.'], ['Сладкие напитки, ежедневные сладости, большие порции углеводов без белка, калорийный фастфуд.']),
    diet: arr(['قسّم الكربوهيدرات على اليوم.', 'اجمع النشويات مع بروتين أو ألياف.', 'راقب الوزن، السكر، والدهون حسب الحالة.'], ['Spread carbohydrates through the day.', 'Pair starches with protein or fiber.', 'Track weight, glucose, and lipids as relevant.'], ['Распределяйте углеводы в течение дня.', 'Сочетайте крахмалы с белком или клетчаткой.', 'Следите за весом, сахаром и липидами.']),
    recipes: {
      breakfast: arr(['بيض مع خضار وخبز أسمر صغير', 'زبادي طبيعي مع توت/تفاح وقليل شوفان', 'فول/حمص بكمية صغيرة بدون زيت زائد'], ['Eggs with vegetables and small whole-grain toast', 'Plain yogurt with berries/apple and a little oats', 'Small portion beans/chickpeas without excess oil'], ['Яйца с овощами и небольшим цельнозерновым тостом', 'Натуральный йогурт с ягодами/яблоком и немного овса', 'Небольшая порция фасоли/нута без лишнего масла']),
      lunch: arr(['دجاج مشوي + سلطة + رز/برغل بكمية محسوبة', 'سمك مشوي + خضار + بطاطا صغيرة', 'شوربة عدس خفيفة مع سلطة'], ['Grilled chicken + salad + measured rice/bulgur', 'Grilled fish + vegetables + small potato', 'Light lentil soup with salad'], ['Курица гриль + салат + умеренно рис/булгур', 'Рыба гриль + овощи + маленькая картофелина', 'Легкий чечевичный суп с салатом']),
      dinner: arr(['سلطة تونة/دجاج خفيفة', 'بيض مسلوق مع خضار', 'شوربة خضار مع بروتين'], ['Light tuna/chicken salad', 'Boiled eggs with vegetables', 'Vegetable soup with protein'], ['Легкий салат с тунцом/курицей', 'Вареные яйца с овощами', 'Овощной суп с белком'])
    }
  },
  cardiovascular: {
    safeFoods: arr(['أطعمة قليلة الملح، سمك، دجاج، خضار، فواكه كاملة، مكسرات غير مملحة بكمية صغيرة.'], ['Low-salt foods, fish, chicken, vegetables, whole fruit, small portions of unsalted nuts.'], ['Низкосоленые продукты, рыба, курица, овощи, цельные фрукты, немного несоленых орехов.']),
    badFoods: arr(['ملح زائد، لحوم مصنعة، مقليات، دهون متحولة، مشروبات طاقة.'], ['Excess salt, processed meats, fried foods, trans fats, energy drinks.'], ['Избыток соли, переработанное мясо, жареное, трансжиры, энергетики.']),
    diet: arr(['اعتمد وجبات قليلة الصوديوم.', 'اختر دهونًا صحية بدل المقليات.', 'راجع الطبيب قبل مكملات أو بدائل ملح.'], ['Use low-sodium meals.', 'Choose healthy fats instead of fried foods.', 'Ask before supplements or salt substitutes.'], ['Питайтесь с низким натрием.', 'Выбирайте здоровые жиры вместо жареного.', 'Спросите врача о добавках и заменителях соли.']),
    recipes: {
      breakfast: arr(['شوفان مع فاكهة مناسبة', 'خبز كامل مع جبن قليل الملح وخضار', 'بيض مع طماطم/خيار إذا يناسبك'], ['Oats with suitable fruit', 'Whole-grain bread with low-salt cheese and vegetables', 'Eggs with tomato/cucumber if tolerated'], ['Овсянка с подходящими фруктами', 'Цельнозерновой хлеб с низкосоленым сыром и овощами', 'Яйца с помидором/огурцом если подходит']),
      lunch: arr(['سمك مشوي مع سلطة', 'دجاج بالفرن مع رز وخضار', 'يخنة خضار منزلية قليلة الملح'], ['Grilled fish with salad', 'Baked chicken with rice and vegetables', 'Low-salt homemade vegetable stew'], ['Рыба гриль с салатом', 'Курица в духовке с рисом и овощами', 'Домашнее овощное рагу с низкой солью']),
      dinner: arr(['شوربة خضار قليلة الملح', 'سلطة حمص خفيفة', 'ساندويتش دجاج منزلي بدون صوص مالح'], ['Low-salt vegetable soup', 'Light chickpea salad', 'Homemade chicken sandwich without salty sauces'], ['Овощной суп с низкой солью', 'Легкий салат с нутом', 'Домашний сэндвич с курицей без соленых соусов'])
    }
  },
  respiratory: {
    safeFoods: arr(['وجبات خفيفة لا تسبب ارتجاعًا، سوائل كافية، أطعمة غنية بالبروتين عند الأمراض المزمنة.'], ['Light meals that do not trigger reflux, adequate fluids, protein-rich foods for chronic illness.'], ['Легкая еда без провокации рефлюкса, достаточно жидкости, белок при хронических болезнях.']),
    badFoods: arr(['أطعمة تسبب ارتجاعًا أو انتفاخًا شديدًا، التدخين، الكحول، الوجبات الثقيلة قبل النوم.'], ['Foods causing reflux or severe bloating, smoking, alcohol, heavy meals before sleep.'], ['Еда, вызывающая рефлюкс/вздутие, курение, алкоголь, тяжелая еда перед сном.']),
    diet: arr(['اختَر وجبات أصغر إذا ضيق النفس يزيد بعد الأكل.', 'حافظ على الترطيب إذا لا يوجد منع طبي.', 'تجنب المحفزات الشخصية.'], ['Choose smaller meals if breathlessness worsens after eating.', 'Hydrate if not medically restricted.', 'Avoid personal triggers.'], ['Ешьте меньшими порциями, если после еды хуже дышать.', 'Пейте достаточно, если нет ограничений.', 'Избегайте личных триггеров.']),
    recipes: {
      breakfast: arr(['زبادي مع فاكهة غير حمضية', 'بيض وخبز خفيف', 'شوفان بسيط'], ['Yogurt with non-acidic fruit', 'Egg and light toast', 'Simple oats'], ['Йогурт с некислыми фруктами', 'Яйцо и легкий тост', 'Простая овсянка']),
      lunch: arr(['دجاج مشوي مع خضار مطبوخة', 'سمك مع رز وسلطة خفيفة', 'شوربة دجاج منزلية'], ['Grilled chicken with cooked vegetables', 'Fish with rice and light salad', 'Homemade chicken soup'], ['Курица гриль с тушеными овощами', 'Рыба с рисом и легким салатом', 'Домашний куриный суп']),
      dinner: arr(['شوربة خفيفة', 'سلطة دجاج صغيرة', 'خضار مطبوخة مع بروتين'], ['Light soup', 'Small chicken salad', 'Cooked vegetables with protein'], ['Легкий суп', 'Небольшой салат с курицей', 'Овощи с белком'])
    }
  },
  digestive: {
    safeFoods: arr(['أطعمة بسيطة قليلة التوابل، رز/بطاطا/شوفان، بروتين خفيف، أطعمة يثبت تحملها.'], ['Simple low-spice foods, rice/potato/oats, lean protein, personally tolerated foods.'], ['Простая малоспециозная еда, рис/картофель/овес, нежирный белок, переносимые продукты.']),
    badFoods: arr(['أطعمة حارة ودسمة، وجبات كبيرة، أطعمة تسبب أعراضًا متكررة، كحول.'], ['Spicy/fatty foods, large meals, repeated personal triggers, alcohol.'], ['Острое/жирное, большие порции, личные триггеры, алкоголь.']),
    diet: arr(['سجل علاقة الطعام بالأعراض.', 'ابدأ بتعديلات بسيطة لا بحمية قاسية.', 'راجع الطبيب عند فقدان وزن أو نزف.'], ['Track food-symptom links.', 'Start with simple changes, not extreme diets.', 'Seek care for weight loss or bleeding.'], ['Отслеживайте связь еды и симптомов.', 'Начинайте с простых изменений, не жестких диет.', 'Обратитесь при похудении или кровотечении.']),
    recipes: {
      breakfast: arr(['شوفان خفيف', 'خبز محمص مع بيض', 'زبادي طبيعي إذا يتحمله المريض'], ['Light oats', 'Toast with egg', 'Plain yogurt if tolerated'], ['Легкая овсянка', 'Тост с яйцом', 'Натуральный йогурт если переносится']),
      lunch: arr(['رز حسب التحمل مع دجاج', 'سمك مشوي وخضار مطبوخة', 'شوربة خفيفة غير حارة'], ['Rice as tolerated with chicken', 'Grilled fish and cooked vegetables', 'Mild non-spicy soup'], ['Рис по переносимости с курицей', 'Рыба гриль и тушеные овощи', 'Нежный неострый суп']),
      dinner: arr(['بطاطا مسلوقة مع بروتين', 'شوربة خضار خفيفة', 'ساندويتش بسيط بدون صوص حار'], ['Boiled potato with protein', 'Light vegetable soup', 'Simple sandwich without spicy sauce'], ['Отварной картофель с белком', 'Легкий овощной суп', 'Простой сэндвич без острого соуса'])
    }
  },
  renal: {
    safeFoods: arr(['أطعمة قليلة الملح، بروتين بكمية يحددها الطبيب، فواكه وخضار حسب البوتاسيوم والفوسفور.'], ['Low-salt foods, clinician-guided protein, fruits/vegetables based on potassium/phosphorus.'], ['Низкая соль, белок по назначению врача, фрукты/овощи по калию/фосфору.']),
    badFoods: arr(['بدائل الملح الغنية بالبوتاسيوم، أطعمة مصنعة، فوسفات مضافة، NSAIDs دون موافقة.'], ['Potassium salt substitutes, processed foods, phosphate additives, NSAIDs without approval.'], ['Заменители соли с калием, переработанные продукты, фосфаты, НПВС без разрешения.']),
    diet: arr(['النظام يعتمد على مرحلة الكلى والتحاليل.', 'لا تقلل البوتاسيوم أو البروتين بقسوة دون طبيب.', 'راقب السوائل إذا طلب الطبيب.'], ['Diet depends on kidney stage and labs.', 'Do not restrict potassium/protein aggressively without clinician input.', 'Track fluids if instructed.'], ['Диета зависит от стадии и анализов.', 'Не ограничивайте калий/белок жестко без врача.', 'Контроль жидкости по назначению.']),
    recipes: {
      breakfast: arr(['تفاح مع خبز قليل الملح وبيض أبيض', 'شوفان/رز حسب التحاليل', 'خيار وخبز أبيض قليل الصوديوم'], ['Apple with low-salt bread and egg whites', 'Oats/rice depending on labs', 'Cucumber and low-sodium white bread'], ['Яблоко с низкосоленым хлебом и белком яйца', 'Овес/рис по анализам', 'Огурец и белый хлеб с низкой солью']),
      lunch: arr(['دجاج طازج 60–90غ مع رز وخضار منخفضة البوتاسيوم', 'سمك أبيض مع سلطة مناسبة', 'يخنة كوسا قليلة الملح'], ['Fresh chicken 60–90g with rice and lower-potassium vegetables', 'White fish with suitable salad', 'Low-salt zucchini stew'], ['Свежая курица 60–90 г с рисом и низкокалиевыми овощами', 'Белая рыба с подходящим салатом', 'Рагу из кабачка с низкой солью']),
      dinner: arr(['شوربة خفيفة محسوبة السوائل', 'سلطة خيار/خس مع بروتين قليل', 'رز مع خضار مناسبة'], ['Light soup with fluids counted', 'Cucumber/lettuce salad with small protein', 'Rice with suitable vegetables'], ['Легкий суп с учетом жидкости', 'Салат огурец/листовой салат с малым белком', 'Рис с подходящими овощами'])
    }
  },
  general: {}
};

function templateFor(kind = 'general') {
  return categoryProfiles[kind] || categoryProfiles.general || {};
}

function makeGuide(seed) {
  const base = templateFor(seed.kind);
  return {
    id: seed.id,
    category: seed.category,
    name: seed.name,
    summary: seed.summary || arr([`${seed.name.ar} يحتاج متابعة منظمة ومعرفة علامات الخطر والغذاء المناسب حسب حالة المريض.`], [`${seed.name.en} needs organized follow-up, awareness of danger signs, and condition-appropriate food choices.`], [`${seed.name.ru} требует организованного наблюдения, знания опасных симптомов и подходящего питания.`]),
    good: seed.good || arr(['متابعة الأعراض والقياسات المهمة.', 'الالتزام بخطة الطبيب.', 'حفظ قائمة الأدوية والحساسيات.'], ['Track symptoms and important measurements.', 'Follow the clinician plan.', 'Keep a list of medicines and allergies.'], ['Отслеживайте симптомы и важные показатели.', 'Следуйте плану врача.', 'Храните список лекарств и аллергий.']),
    avoid: seed.avoid || arr(['تجاهل الأعراض الجديدة أو الشديدة.', 'إيقاف الدواء دون طبيب.', 'تجربة وصفات أو مكملات غير موثوقة.'], ['Ignoring new or severe symptoms.', 'Stopping medicine without advice.', 'Trying unverified remedies or supplements.'], ['Не игнорируйте новые или сильные симптомы.', 'Не прекращайте лекарства без врача.', 'Не используйте сомнительные средства/добавки.']),
    urgent: seed.urgent || arr(['ألم شديد مفاجئ أو ضيق نفس.', 'إغماء، تشنج، أو ضعف مفاجئ.', 'حمى عالية أو تدهور سريع.'], ['Sudden severe pain or shortness of breath.', 'Fainting, seizure, or sudden weakness.', 'High fever or rapid worsening.'], ['Внезапная сильная боль или одышка.', 'Обморок, судороги или внезапная слабость.', 'Высокая температура или быстрое ухудшение.']),
    questions: seed.questions || arr(['ما التشخيص الدقيق؟', 'ما الفحوصات المطلوبة؟', 'ما الخطة إذا ساءت الأعراض؟'], ['What is the exact diagnosis?', 'Which tests are needed?', 'What should I do if symptoms worsen?'], ['Какой точный диагноз?', 'Какие анализы нужны?', 'Что делать при ухудшении?']),
    safeFoods: seed.safeFoods || base.safeFoods || arr(commonDiet.ar.safeFoods, commonDiet.en.safeFoods, commonDiet.ru.safeFoods),
    badFoods: seed.badFoods || base.badFoods || arr(commonDiet.ar.badFoods, commonDiet.en.badFoods, commonDiet.ru.badFoods),
    diet: seed.diet || base.diet || arr(commonDiet.ar.diet, commonDiet.en.diet, commonDiet.ru.diet),
    recipes: seed.recipes || base.recipes || {
      breakfast: arr(commonDiet.ar.recipes.breakfast, commonDiet.en.recipes.breakfast, commonDiet.ru.recipes.breakfast),
      lunch: arr(commonDiet.ar.recipes.lunch, commonDiet.en.recipes.lunch, commonDiet.ru.recipes.lunch),
      dinner: arr(commonDiet.ar.recipes.dinner, commonDiet.en.recipes.dinner, commonDiet.ru.recipes.dinner)
    }
  };
}

function enhanceExistingGuide(guide, kind = 'general') {
  const base = templateFor(kind);
  guide.safeFoods = guide.safeFoods || base.safeFoods || arr(commonDiet.ar.safeFoods, commonDiet.en.safeFoods, commonDiet.ru.safeFoods);
  guide.badFoods = guide.badFoods || base.badFoods || arr(commonDiet.ar.badFoods, commonDiet.en.badFoods, commonDiet.ru.badFoods);
  guide.diet = guide.diet || base.diet || arr(commonDiet.ar.diet, commonDiet.en.diet, commonDiet.ru.diet);
  guide.recipes = guide.recipes || base.recipes || {
    breakfast: arr(commonDiet.ar.recipes.breakfast, commonDiet.en.recipes.breakfast, commonDiet.ru.recipes.breakfast),
    lunch: arr(commonDiet.ar.recipes.lunch, commonDiet.en.recipes.lunch, commonDiet.ru.recipes.lunch),
    dinner: arr(commonDiet.ar.recipes.dinner, commonDiet.en.recipes.dinner, commonDiet.ru.recipes.dinner)
  };
  return guide;
}

const existingKindById = {
  diabetes2: 'metabolic', hypertension: 'cardiovascular', asthma: 'respiratory', heart_disease: 'cardiovascular', gerd: 'digestive', ibs: 'digestive', kidney: 'renal', gout: 'metabolic', metabolic_syndrome: 'metabolic', sleep_apnea: 'respiratory', celiac: 'digestive', pcos: 'metabolic', depression_anxiety: 'mental', allergy: 'skin'
};
diseaseGuides.forEach((guide) => enhanceExistingGuide(guide, existingKindById[guide.id] || 'general'));

const extraDiseaseSeeds = [
  { id: 'type1_diabetes', kind: 'metabolic', category: tx('غدد واستقلاب', 'Endocrine & metabolic', 'Эндокринология и обмен'), name: tx('السكري النوع الأول', 'Type 1 diabetes', 'Сахарный диабет 1 типа') },
  { id: 'prediabetes', kind: 'metabolic', category: tx('غدد واستقلاب', 'Endocrine & metabolic', 'Эндокринология и обмен'), name: tx('مرحلة ما قبل السكري', 'Prediabetes', 'Преддиабет') },
  { id: 'gestational_diabetes', kind: 'metabolic', category: tx('غدد واستقلاب', 'Endocrine & metabolic', 'Эндокринология и обмен'), name: tx('سكري الحمل', 'Gestational diabetes', 'Гестационный диабет') },
  { id: 'hypothyroidism', kind: 'metabolic', category: tx('غدد واستقلاب', 'Endocrine & metabolic', 'Эндокринология и обмен'), name: tx('قصور الغدة الدرقية', 'Hypothyroidism', 'Гипотиреоз') },
  { id: 'hyperthyroidism', kind: 'metabolic', category: tx('غدد واستقلاب', 'Endocrine & metabolic', 'Эндокринология и обмен'), name: tx('فرط نشاط الغدة الدرقية', 'Hyperthyroidism', 'Гипертиреоз') },
  { id: 'hashimoto', kind: 'metabolic', category: tx('غدد واستقلاب', 'Endocrine & metabolic', 'Эндокринология и обмен'), name: tx('التهاب هاشيموتو', 'Hashimoto thyroiditis', 'Тиреоидит Хашимото') },
  { id: 'graves', kind: 'metabolic', category: tx('غدد واستقلاب', 'Endocrine & metabolic', 'Эндокринология и обмен'), name: tx('مرض غريفز', 'Graves disease', 'Болезнь Грейвса') },
  { id: 'obesity', kind: 'metabolic', category: tx('غدد واستقلاب', 'Endocrine & metabolic', 'Эндокринология и обмен'), name: tx('السمنة', 'Obesity', 'Ожирение') },
  { id: 'high_cholesterol', kind: 'metabolic', category: tx('غدد واستقلاب', 'Endocrine & metabolic', 'Эндокринология и обмен'), name: tx('ارتفاع الكوليسترول', 'High cholesterol', 'Высокий холестерин') },
  { id: 'osteoporosis', kind: 'musculoskeletal', category: tx('عظام ومفاصل', 'Bones & joints', 'Кости и суставы'), name: tx('هشاشة العظام', 'Osteoporosis', 'Остеопороз') },
  { id: 'vitamin_d_deficiency', kind: 'metabolic', category: tx('غدد واستقلاب', 'Endocrine & metabolic', 'Эндокринология и обмен'), name: tx('نقص فيتامين د', 'Vitamin D deficiency', 'Дефицит витамина D') },
  { id: 'b12_deficiency', kind: 'blood', category: tx('دم ومناعة', 'Blood & immune', 'Кровь и иммунитет'), name: tx('نقص فيتامين B12', 'Vitamin B12 deficiency', 'Дефицит витамина B12') },
  { id: 'coronary_artery_disease', kind: 'cardiovascular', category: tx('قلب وأوعية', 'Heart & circulation', 'Сердце и сосуды'), name: tx('مرض الشريان التاجي', 'Coronary artery disease', 'Ишемическая болезнь сердца') },
  { id: 'heart_failure', kind: 'cardiovascular', category: tx('قلب وأوعية', 'Heart & circulation', 'Сердце и сосуды'), name: tx('فشل القلب', 'Heart failure', 'Сердечная недостаточность') },
  { id: 'atrial_fibrillation', kind: 'cardiovascular', category: tx('قلب وأوعية', 'Heart & circulation', 'Сердце и сосуды'), name: tx('الرجفان الأذيني', 'Atrial fibrillation', 'Фибрилляция предсердий') },
  { id: 'valve_disease', kind: 'cardiovascular', category: tx('قلب وأوعية', 'Heart & circulation', 'Сердце и сосуды'), name: tx('أمراض صمامات القلب', 'Heart valve disease', 'Пороки клапанов сердца') },
  { id: 'stroke_tia', kind: 'cardiovascular', category: tx('قلب وأوعية', 'Heart & circulation', 'Сердце и сосуды'), name: tx('السكتة الدماغية / الجلطة العابرة', 'Stroke / TIA', 'Инсульт / ТИА') },
  { id: 'peripheral_artery_disease', kind: 'cardiovascular', category: tx('قلب وأوعية', 'Heart & circulation', 'Сердце и сосуды'), name: tx('مرض الشرايين الطرفية', 'Peripheral artery disease', 'Заболевание периферических артерий') },
  { id: 'dvt', kind: 'cardiovascular', category: tx('قلب وأوعية', 'Heart & circulation', 'Сердце и сосуды'), name: tx('جلطة الأوردة العميقة', 'Deep vein thrombosis', 'Тромбоз глубоких вен') },
  { id: 'varicose_veins', kind: 'cardiovascular', category: tx('قلب وأوعية', 'Heart & circulation', 'Сердце и сосуды'), name: tx('دوالي الساقين', 'Varicose veins', 'Варикозное расширение вен') },
  { id: 'low_blood_pressure', kind: 'cardiovascular', category: tx('قلب وأوعية', 'Heart & circulation', 'Сердце и сосуды'), name: tx('انخفاض ضغط الدم', 'Low blood pressure', 'Низкое давление') },
  { id: 'copd', kind: 'respiratory', category: tx('تنفسي', 'Respiratory', 'Дыхательная система'), name: tx('الانسداد الرئوي المزمن', 'COPD', 'ХОБЛ') },
  { id: 'bronchitis', kind: 'respiratory', category: tx('تنفسي', 'Respiratory', 'Дыхательная система'), name: tx('التهاب الشعب الهوائية', 'Bronchitis', 'Бронхит') },
  { id: 'pneumonia', kind: 'respiratory', category: tx('تنفسي', 'Respiratory', 'Дыхательная система'), name: tx('ذات الرئة / التهاب الرئة', 'Pneumonia', 'Пневмония') },
  { id: 'allergic_rhinitis', kind: 'respiratory', category: tx('تنفسي', 'Respiratory', 'Дыхательная система'), name: tx('حساسية الأنف', 'Allergic rhinitis', 'Аллергический ринит') },
  { id: 'sinusitis', kind: 'respiratory', category: tx('تنفسي', 'Respiratory', 'Дыхательная система'), name: tx('التهاب الجيوب الأنفية', 'Sinusitis', 'Синусит') },
  { id: 'tuberculosis', kind: 'respiratory', category: tx('تنفسي', 'Respiratory', 'Дыхательная система'), name: tx('السل', 'Tuberculosis', 'Туберкулез') },
  { id: 'cystic_fibrosis', kind: 'respiratory', category: tx('تنفسي', 'Respiratory', 'Дыхательная система'), name: tx('التليف الكيسي', 'Cystic fibrosis', 'Муковисцидоз') },
  { id: 'bronchiectasis', kind: 'respiratory', category: tx('تنفسي', 'Respiratory', 'Дыхательная система'), name: tx('توسع القصبات', 'Bronchiectasis', 'Бронхоэктазы') },
  { id: 'pulmonary_embolism', kind: 'respiratory', category: tx('تنفسي', 'Respiratory', 'Дыхательная система'), name: tx('الانصمام الرئوي', 'Pulmonary embolism', 'Тромбоэмболия легочной артерии') },
  { id: 'covid19', kind: 'infectious', category: tx('عدوى ومناعة', 'Infections', 'Инфекции'), name: tx('كوفيد-19', 'COVID-19', 'COVID-19') },
  { id: 'influenza', kind: 'infectious', category: tx('عدوى ومناعة', 'Infections', 'Инфекции'), name: tx('الإنفلونزا', 'Influenza', 'Грипп') },
  { id: 'gastritis', kind: 'digestive', category: tx('هضمي', 'Digestive', 'Пищеварительная система'), name: tx('التهاب المعدة', 'Gastritis', 'Гастрит') },
  { id: 'peptic_ulcer', kind: 'digestive', category: tx('هضمي', 'Digestive', 'Пищеварительная система'), name: tx('قرحة المعدة أو الاثني عشر', 'Peptic ulcer disease', 'Язвенная болезнь') },
  { id: 'gallstones', kind: 'digestive', category: tx('هضمي', 'Digestive', 'Пищеварительная система'), name: tx('حصوات المرارة', 'Gallstones', 'Желчные камни') },
  { id: 'fatty_liver', kind: 'digestive', category: tx('هضمي', 'Digestive', 'Пищеварительная система'), name: tx('الكبد الدهني', 'Fatty liver disease', 'Жировая болезнь печени') },
  { id: 'hepatitis_b', kind: 'digestive', category: tx('هضمي', 'Digestive', 'Пищеварительная система'), name: tx('التهاب الكبد B', 'Hepatitis B', 'Гепатит B') },
  { id: 'hepatitis_c', kind: 'digestive', category: tx('هضمي', 'Digestive', 'Пищеварительная система'), name: tx('التهاب الكبد C', 'Hepatitis C', 'Гепатит C') },
  { id: 'cirrhosis', kind: 'digestive', category: tx('هضمي', 'Digestive', 'Пищеварительная система'), name: tx('تشمع الكبد', 'Cirrhosis', 'Цирроз') },
  { id: 'pancreatitis', kind: 'digestive', category: tx('هضمي', 'Digestive', 'Пищеварительная система'), name: tx('التهاب البنكرياس', 'Pancreatitis', 'Панкреатит') },
  { id: 'constipation', kind: 'digestive', category: tx('هضمي', 'Digestive', 'Пищеварительная система'), name: tx('الإمساك', 'Constipation', 'Запор') },
  { id: 'chronic_diarrhea', kind: 'digestive', category: tx('هضمي', 'Digestive', 'Пищеварительная система'), name: tx('الإسهال المزمن', 'Chronic diarrhea', 'Хроническая диарея') },
  { id: 'hemorrhoids', kind: 'digestive', category: tx('هضمي', 'Digestive', 'Пищеварительная система'), name: tx('البواسير', 'Hemorrhoids', 'Геморрой') },
  { id: 'diverticular_disease', kind: 'digestive', category: tx('هضمي', 'Digestive', 'Пищеварительная система'), name: tx('مرض الرتوج', 'Diverticular disease', 'Дивертикулярная болезнь') },
  { id: 'crohn', kind: 'digestive', category: tx('هضمي', 'Digestive', 'Пищеварительная система'), name: tx('داء كرون', 'Crohn disease', 'Болезнь Крона') },
  { id: 'ulcerative_colitis', kind: 'digestive', category: tx('هضمي', 'Digestive', 'Пищеварительная система'), name: tx('التهاب القولون التقرحي', 'Ulcerative colitis', 'Язвенный колит') },
  { id: 'lactose_intolerance', kind: 'digestive', category: tx('هضمي', 'Digestive', 'Пищеварительная система'), name: tx('عدم تحمل اللاكتوز', 'Lactose intolerance', 'Непереносимость лактозы') },
  { id: 'food_poisoning', kind: 'infectious', category: tx('عدوى ومناعة', 'Infections', 'Инфекции'), name: tx('تسمم غذائي', 'Food poisoning', 'Пищевое отравление') },
  { id: 'kidney_stones', kind: 'renal', category: tx('كلى ومسالك', 'Kidney & urinary', 'Почки и мочевые пути'), name: tx('حصوات الكلى', 'Kidney stones', 'Камни в почках') },
  { id: 'uti', kind: 'renal', category: tx('كلى ومسالك', 'Kidney & urinary', 'Почки и мочевые пути'), name: tx('التهاب المسالك البولية', 'Urinary tract infection', 'Инфекция мочевых путей') },
  { id: 'prostate_enlargement', kind: 'renal', category: tx('كلى ومسالك', 'Kidney & urinary', 'Почки и мочевые пути'), name: tx('تضخم البروستاتا الحميد', 'Benign prostate enlargement', 'Доброкачественная гиперплазия простаты') },
  { id: 'urinary_incontinence', kind: 'renal', category: tx('كلى ومسالك', 'Kidney & urinary', 'Почки и мочевые пути'), name: tx('سلس البول', 'Urinary incontinence', 'Недержание мочи') },
  { id: 'acute_kidney_injury', kind: 'renal', category: tx('كلى ومسالك', 'Kidney & urinary', 'Почки и мочевые пути'), name: tx('إصابة الكلى الحادة', 'Acute kidney injury', 'Острое повреждение почек') },
  { id: 'nephrotic_syndrome', kind: 'renal', category: tx('كلى ومسالك', 'Kidney & urinary', 'Почки и мочевые пути'), name: tx('المتلازمة النفروتية', 'Nephrotic syndrome', 'Нефротический синдром') },
  { id: 'migraine', kind: 'neuro', category: tx('أعصاب', 'Neurology', 'Неврология'), name: tx('الشقيقة / الصداع النصفي', 'Migraine', 'Мигрень') },
  { id: 'epilepsy', kind: 'neuro', category: tx('أعصاب', 'Neurology', 'Неврология'), name: tx('الصرع', 'Epilepsy', 'Эпилепсия') },
  { id: 'parkinson', kind: 'neuro', category: tx('أعصاب', 'Neurology', 'Неврология'), name: tx('مرض باركنسون', 'Parkinson disease', 'Болезнь Паркинсона') },
  { id: 'alzheimer', kind: 'neuro', category: tx('أعصاب', 'Neurology', 'Неврология'), name: tx('مرض ألزهايمر', 'Alzheimer disease', 'Болезнь Альцгеймера') },
  { id: 'multiple_sclerosis', kind: 'neuro', category: tx('أعصاب', 'Neurology', 'Неврология'), name: tx('التصلب المتعدد', 'Multiple sclerosis', 'Рассеянный склероз') },
  { id: 'neuropathy', kind: 'neuro', category: tx('أعصاب', 'Neurology', 'Неврология'), name: tx('اعتلال الأعصاب الطرفية', 'Peripheral neuropathy', 'Периферическая нейропатия') },
  { id: 'vertigo', kind: 'neuro', category: tx('أعصاب', 'Neurology', 'Неврология'), name: tx('الدوخة والدوار', 'Vertigo', 'Головокружение') },
  { id: 'bell_palsy', kind: 'neuro', category: tx('أعصاب', 'Neurology', 'Неврология'), name: tx('شلل بيل', 'Bell palsy', 'Паралич Белла') },
  { id: 'carpal_tunnel', kind: 'neuro', category: tx('أعصاب', 'Neurology', 'Неврология'), name: tx('متلازمة النفق الرسغي', 'Carpal tunnel syndrome', 'Синдром запястного канала') },
  { id: 'tension_headache', kind: 'neuro', category: tx('أعصاب', 'Neurology', 'Неврология'), name: tx('صداع التوتر', 'Tension headache', 'Головная боль напряжения') },
  { id: 'anxiety_disorder', kind: 'mental', category: tx('صحة نفسية', 'Mental health', 'Психическое здоровье'), name: tx('اضطراب القلق', 'Anxiety disorder', 'Тревожное расстройство') },
  { id: 'major_depression', kind: 'mental', category: tx('صحة نفسية', 'Mental health', 'Психическое здоровье'), name: tx('الاكتئاب', 'Depression', 'Депрессия') },
  { id: 'bipolar_disorder', kind: 'mental', category: tx('صحة نفسية', 'Mental health', 'Психическое здоровье'), name: tx('اضطراب ثنائي القطب', 'Bipolar disorder', 'Биполярное расстройство') },
  { id: 'schizophrenia', kind: 'mental', category: tx('صحة نفسية', 'Mental health', 'Психическое здоровье'), name: tx('الفصام', 'Schizophrenia', 'Шизофрения') },
  { id: 'ptsd', kind: 'mental', category: tx('صحة نفسية', 'Mental health', 'Психическое здоровье'), name: tx('اضطراب ما بعد الصدمة', 'PTSD', 'ПТСР') },
  { id: 'ocd', kind: 'mental', category: tx('صحة نفسية', 'Mental health', 'Психическое здоровье'), name: tx('الوسواس القهري', 'Obsessive-compulsive disorder', 'ОКР') },
  { id: 'adhd', kind: 'pediatric', category: tx('أطفال ومتلازمات', 'Children & syndromes', 'Дети и синдромы'), name: tx('اضطراب فرط الحركة وتشتت الانتباه', 'ADHD', 'СДВГ') },
  { id: 'eating_disorder', kind: 'mental', category: tx('صحة نفسية', 'Mental health', 'Психическое здоровье'), name: tx('اضطرابات الأكل', 'Eating disorders', 'Расстройства пищевого поведения') },
  { id: 'insomnia', kind: 'mental', category: tx('صحة نفسية', 'Mental health', 'Психическое здоровье'), name: tx('الأرق', 'Insomnia', 'Бессонница') },
  { id: 'panic_disorder', kind: 'mental', category: tx('صحة نفسية', 'Mental health', 'Психическое здоровье'), name: tx('اضطراب الهلع', 'Panic disorder', 'Паническое расстройство') },
  { id: 'eczema', kind: 'skin', category: tx('جلد وحساسية', 'Skin & allergy', 'Кожа и аллергия'), name: tx('الأكزيما', 'Eczema', 'Экзема') },
  { id: 'psoriasis', kind: 'skin', category: tx('جلد وحساسية', 'Skin & allergy', 'Кожа и аллергия'), name: tx('الصدفية', 'Psoriasis', 'Псориаз') },
  { id: 'acne', kind: 'skin', category: tx('جلد وحساسية', 'Skin & allergy', 'Кожа и аллергия'), name: tx('حب الشباب', 'Acne', 'Акне') },
  { id: 'urticaria', kind: 'skin', category: tx('جلد وحساسية', 'Skin & allergy', 'Кожа и аллергия'), name: tx('الشرى / الأرتيكاريا', 'Urticaria / hives', 'Крапивница') },
  { id: 'fungal_skin', kind: 'skin', category: tx('جلد وحساسية', 'Skin & allergy', 'Кожа и аллергия'), name: tx('فطريات الجلد', 'Fungal skin infection', 'Грибковая инфекция кожи') },
  { id: 'cellulitis', kind: 'infectious', category: tx('عدوى ومناعة', 'Infections', 'Инфекции'), name: tx('التهاب النسيج الخلوي', 'Cellulitis', 'Целлюлит кожи') },
  { id: 'shingles', kind: 'infectious', category: tx('عدوى ومناعة', 'Infections', 'Инфекции'), name: tx('الحزام الناري', 'Shingles', 'Опоясывающий лишай') },
  { id: 'vitiligo', kind: 'skin', category: tx('جلد وحساسية', 'Skin & allergy', 'Кожа и аллергия'), name: tx('البهاق', 'Vitiligo', 'Витилиго') },
  { id: 'alopecia', kind: 'skin', category: tx('جلد وحساسية', 'Skin & allergy', 'Кожа и аллергия'), name: tx('تساقط الشعر / الثعلبة', 'Alopecia', 'Алопеция') },
  { id: 'tonsillitis', kind: 'infectious', category: tx('عدوى ومناعة', 'Infections', 'Инфекции'), name: tx('التهاب اللوزتين', 'Tonsillitis', 'Тонзиллит') },
  { id: 'otitis_media', kind: 'eye_ent', category: tx('عيون وأنف وأذن', 'Eyes, ENT & hearing', 'Глаза, ЛОР и слух'), name: tx('التهاب الأذن الوسطى', 'Otitis media', 'Средний отит') },
  { id: 'measles', kind: 'infectious', category: tx('عدوى ومناعة', 'Infections', 'Инфекции'), name: tx('الحصبة', 'Measles', 'Корь') },
  { id: 'chickenpox', kind: 'infectious', category: tx('عدوى ومناعة', 'Infections', 'Инфекции'), name: tx('جدري الماء', 'Chickenpox', 'Ветряная оспа') },
  { id: 'dengue', kind: 'infectious', category: tx('عدوى ومناعة', 'Infections', 'Инфекции'), name: tx('حمى الضنك', 'Dengue', 'Денге') },
  { id: 'malaria', kind: 'infectious', category: tx('عدوى ومناعة', 'Infections', 'Инфекции'), name: tx('الملاريا', 'Malaria', 'Малярия') },
  { id: 'hiv', kind: 'infectious', category: tx('عدوى ومناعة', 'Infections', 'Инфекции'), name: tx('فيروس نقص المناعة HIV', 'HIV', 'ВИЧ') },
  { id: 'stds', kind: 'infectious', category: tx('عدوى ومناعة', 'Infections', 'Инфекции'), name: tx('الأمراض المنقولة جنسيًا', 'Sexually transmitted infections', 'ИППП') },
  { id: 'parasitic_worms', kind: 'infectious', category: tx('عدوى ومناعة', 'Infections', 'Инфекции'), name: tx('الديدان والطفيليات المعوية', 'Intestinal worms and parasites', 'Кишечные паразиты и гельминты') },
  { id: 'osteoarthritis', kind: 'musculoskeletal', category: tx('عظام ومفاصل', 'Bones & joints', 'Кости и суставы'), name: tx('خشونة المفاصل', 'Osteoarthritis', 'Остеоартрит') },
  { id: 'rheumatoid_arthritis', kind: 'musculoskeletal', category: tx('عظام ومفاصل', 'Bones & joints', 'Кости и суставы'), name: tx('الروماتويد', 'Rheumatoid arthritis', 'Ревматоидный артрит') },
  { id: 'back_pain', kind: 'musculoskeletal', category: tx('عظام ومفاصل', 'Bones & joints', 'Кости и суставы'), name: tx('ألم الظهر', 'Back pain', 'Боль в спине') },
  { id: 'sciatica', kind: 'musculoskeletal', category: tx('عظام ومفاصل', 'Bones & joints', 'Кости и суставы'), name: tx('عرق النسا', 'Sciatica', 'Ишиас') },
  { id: 'fibromyalgia', kind: 'musculoskeletal', category: tx('عظام ومفاصل', 'Bones & joints', 'Кости и суставы'), name: tx('الألم العضلي الليفي', 'Fibromyalgia', 'Фибромиалгия') },
  { id: 'lupus', kind: 'blood', category: tx('دم ومناعة', 'Blood & immune', 'Кровь и иммунитет'), name: tx('الذئبة الحمراء', 'Lupus', 'Системная красная волчанка') },
  { id: 'ankylosing_spondylitis', kind: 'musculoskeletal', category: tx('عظام ومفاصل', 'Bones & joints', 'Кости и суставы'), name: tx('التهاب الفقار اللاصق', 'Ankylosing spondylitis', 'Анкилозирующий спондилит') },
  { id: 'fracture', kind: 'musculoskeletal', category: tx('عظام ومفاصل', 'Bones & joints', 'Кости и суставы'), name: tx('الكسور', 'Bone fracture', 'Перелом кости') },
  { id: 'endometriosis', kind: 'reproductive', category: tx('نساء وتناسل', 'Reproductive health', 'Репродуктивное здоровье'), name: tx('بطانة الرحم المهاجرة', 'Endometriosis', 'Эндометриоз') },
  { id: 'adenomyosis', kind: 'reproductive', category: tx('نساء وتناسل', 'Reproductive health', 'Репродуктивное здоровье'), name: tx('العضال الغدي', 'Adenomyosis', 'Аденомиоз') },
  { id: 'fibroids', kind: 'reproductive', category: tx('نساء وتناسل', 'Reproductive health', 'Репродуктивное здоровье'), name: tx('الأورام الليفية الرحمية', 'Uterine fibroids', 'Миома матки') },
  { id: 'menopause', kind: 'reproductive', category: tx('نساء وتناسل', 'Reproductive health', 'Репродуктивное здоровье'), name: tx('سن اليأس / انقطاع الطمث', 'Menopause', 'Менопауза') },
  { id: 'pregnancy_care', kind: 'reproductive', category: tx('نساء وتناسل', 'Reproductive health', 'Репродуктивное здоровье'), name: tx('رعاية الحمل العامة', 'Pregnancy care', 'Ведение беременности') },
  { id: 'preeclampsia', kind: 'reproductive', category: tx('نساء وتناسل', 'Reproductive health', 'Репродуктивное здоровье'), name: tx('تسمم الحمل', 'Preeclampsia', 'Преэклампсия') },
  { id: 'infertility', kind: 'reproductive', category: tx('نساء وتناسل', 'Reproductive health', 'Репродуктивное здоровье'), name: tx('تأخر الحمل / العقم', 'Infertility', 'Бесплодие') },
  { id: 'ovarian_cyst', kind: 'reproductive', category: tx('نساء وتناسل', 'Reproductive health', 'Репродуктивное здоровье'), name: tx('كيس المبيض', 'Ovarian cyst', 'Киста яичника') },
  { id: 'breast_cancer', kind: 'cancer', category: tx('أورام', 'Cancer', 'Онкология'), name: tx('سرطان الثدي', 'Breast cancer', 'Рак молочной железы') },
  { id: 'cervical_cancer', kind: 'cancer', category: tx('أورام', 'Cancer', 'Онкология'), name: tx('سرطان عنق الرحم', 'Cervical cancer', 'Рак шейки матки') },
  { id: 'cerebral_palsy', kind: 'pediatric', category: tx('أطفال ومتلازمات', 'Children & syndromes', 'Дети и синдромы'), name: tx('الشلل الدماغي', 'Cerebral palsy', 'ДЦП') },
  { id: 'congenital_heart_disease', kind: 'pediatric', category: tx('أطفال ومتلازمات', 'Children & syndromes', 'Дети и синдромы'), name: tx('أمراض القلب الخلقية', 'Congenital heart disease', 'Врожденный порок сердца') },
  { id: 'turner_syndrome', kind: 'pediatric', category: tx('أطفال ومتلازمات', 'Children & syndromes', 'Дети и синдромы'), name: tx('متلازمة تيرنر', 'Turner syndrome', 'Синдром Тернера') },
  { id: 'klinefelter_syndrome', kind: 'pediatric', category: tx('أطفال ومتلازمات', 'Children & syndromes', 'Дети и синдромы'), name: tx('متلازمة كلاينفلتر', 'Klinefelter syndrome', 'Синдром Клайнфельтера') },
  { id: 'sickle_cell', kind: 'blood', category: tx('دم ومناعة', 'Blood & immune', 'Кровь и иммунитет'), name: tx('فقر الدم المنجلي', 'Sickle cell disease', 'Серповидноклеточная болезнь') },
  { id: 'thalassemia', kind: 'blood', category: tx('دم ومناعة', 'Blood & immune', 'Кровь и иммунитет'), name: tx('الثلاسيميا', 'Thalassemia', 'Талассемия') },
  { id: 'cataract', kind: 'eye_ent', category: tx('عيون وأنف وأذن', 'Eyes, ENT & hearing', 'Глаза, ЛОР и слух'), name: tx('الماء الأبيض / الساد', 'Cataract', 'Катаракта') },
  { id: 'glaucoma', kind: 'eye_ent', category: tx('عيون وأنف وأذن', 'Eyes, ENT & hearing', 'Глаза, ЛОР и слух'), name: tx('الماء الأزرق / الجلوكوما', 'Glaucoma', 'Глаукома') },
  { id: 'conjunctivitis', kind: 'eye_ent', category: tx('عيون وأنف وأذن', 'Eyes, ENT & hearing', 'Глаза, ЛОР и слух'), name: tx('التهاب الملتحمة', 'Conjunctivitis', 'Конъюнктивит') },
  { id: 'hearing_loss', kind: 'eye_ent', category: tx('عيون وأنف وأذن', 'Eyes, ENT & hearing', 'Глаза, ЛОР и слух'), name: tx('ضعف السمع', 'Hearing loss', 'Потеря слуха') },
  { id: 'tinnitus', kind: 'eye_ent', category: tx('عيون وأنف وأذن', 'Eyes, ENT & hearing', 'Глаза, ЛОР и слух'), name: tx('طنين الأذن', 'Tinnitus', 'Шум в ушах') },
  { id: 'adenoids_tonsils', kind: 'eye_ent', category: tx('عيون وأنف وأذن', 'Eyes, ENT & hearing', 'Глаза, ЛОР и слух'), name: tx('اللحمية وتضخم اللوز', 'Adenoids and enlarged tonsils', 'Аденоиды и увеличенные миндалины') },
  { id: 'colon_cancer', kind: 'cancer', category: tx('أورام', 'Cancer', 'Онкология'), name: tx('سرطان القولون', 'Colon cancer', 'Рак толстой кишки') },
  { id: 'lung_cancer', kind: 'cancer', category: tx('أورام', 'Cancer', 'Онкология'), name: tx('سرطان الرئة', 'Lung cancer', 'Рак легкого') },
  { id: 'prostate_cancer', kind: 'cancer', category: tx('أورام', 'Cancer', 'Онкология'), name: tx('سرطان البروستاتا', 'Prostate cancer', 'Рак простаты') },
  { id: 'leukemia', kind: 'cancer', category: tx('أورام', 'Cancer', 'Онкология'), name: tx('اللوكيميا', 'Leukemia', 'Лейкоз') },
  { id: 'lymphoma', kind: 'cancer', category: tx('أورام', 'Cancer', 'Онкология'), name: tx('اللمفوما', 'Lymphoma', 'Лимфома') },
  { id: 'iron_deficiency_anemia', kind: 'blood', category: tx('دم ومناعة', 'Blood & immune', 'Кровь и иммунитет'), name: tx('فقر الدم بنقص الحديد', 'Iron deficiency anemia', 'Железодефицитная анемия') },
  { id: 'hemophilia', kind: 'blood', category: tx('دم ومناعة', 'Blood & immune', 'Кровь и иммунитет'), name: tx('الهيموفيليا', 'Hemophilia', 'Гемофилия') },
  { id: 'itp', kind: 'blood', category: tx('دم ومناعة', 'Blood & immune', 'Кровь и иммунитет'), name: tx('نقص الصفائح المناعي ITP', 'Immune thrombocytopenia ITP', 'Иммунная тромбоцитопения ИТП') },
  { id: 'sepsis', kind: 'infectious', category: tx('عدوى ومناعة', 'Infections', 'Инфекции'), name: tx('تعفن الدم', 'Sepsis', 'Сепсис') },
  { id: 'dehydration', kind: 'general', category: tx('صحة عامة', 'General health', 'Общее здоровье'), name: tx('الجفاف', 'Dehydration', 'Обезвоживание') },
  { id: 'heatstroke', kind: 'general', category: tx('صحة عامة', 'General health', 'Общее здоровье'), name: tx('ضربة الشمس', 'Heatstroke', 'Тепловой удар') },
  { id: 'anaphylaxis', kind: 'skin', category: tx('جلد وحساسية', 'Skin & allergy', 'Кожа и аллергия'), name: tx('الحساسية المفرطة', 'Anaphylaxis', 'Анафилаксия') }
];

const existingDiseaseIds = new Set(diseaseGuides.map((guide) => guide.id));
diseaseGuides.push(...extraDiseaseSeeds.filter((seed) => !existingDiseaseIds.has(seed.id)).map(makeGuide));
diseaseGuides.sort((a, b) => (a.name.en || a.name.ar).localeCompare(b.name.en || b.name.ar));


export const defaultProfile = {
  fullName: '',
  age: '',
  gender: '',
  phone: '',
  address: '',
  diseases: [],
  otherDiseaseText: '',
  diseaseDuration: '',
  normalBloodPressure: '',
  weight: '',
  height: '',
  disabilities: '',
  allergies: '',
  currentMedicines: '',
  otherNotes: ''
};


export const approvedDoctorIds = [
  'TABIBI-DR-1001',
  'TABIBI-DR-1002',
  'MOH-DR-2026-001',
  'MOH-DR-2026-002'
];
