export const dates = [
  { day: "19", weekday: "Ср" },
  { day: "20", weekday: "Чт" },
  { day: "21", weekday: "Пт" },
  { day: "22", weekday: "Сб" },
  { day: "23", weekday: "Вс" },
  { day: "24", weekday: "Пн" },
];

export const times = [
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];

export type Plan = {
  id: string;
  title: string;
  subtitle: string;
  oldPrice: number;
  price: number;
  perSession?: number;
  badge?: string;
  savings?: string;
};

export const plans: Plan[] = [
  {
    id: "p4",
    title: "4 занятия в месяц",
    subtitle: "4 занятия на 1 месяц",
    oldPrice: 4400,
    price: 3960,
    perSession: 990,
  },
  {
    id: "p8",
    title: "8 занятий в месяц",
    subtitle: "8 занятий на 1 месяц",
    oldPrice: 6600,
    price: 5940,
    perSession: 742.5,
    savings: "Экономия 25%",
  },
  {
    id: "p12",
    title: "12 занятий в месяц",
    subtitle: "12 занятий на 1 месяц",
    oldPrice: 7700,
    price: 6930,
    perSession: 577.5,
    savings: "Экономия 42%",
  },
  {
    id: "unlim",
    title: "Безлимит на месяц",
    subtitle: "Без ограничений по количеству занятий",
    oldPrice: 5500,
    price: 4950,
    badge: "Максимальная выгода",
  },
];

export const equipment = [
  { icon: "scale", label: "Весы с биоимпедансом" },
  { icon: "treadmill", label: "Беговая дорожка" },
  { icon: "smith", label: "Тренажёр машина Смита" },
  { icon: "bench", label: "Жимовая скамья" },
  { icon: "barbellZ", label: "Z-образный короткий гриф" },
  { icon: "dumbbellPair", label: "Механические гантели (2–34 кг)" },
  { icon: "barbellShort", label: "Бодибары (2–6 кг)" },
  { icon: "expander", label: "Эспандеры" },
  { icon: "barbellShort", label: "Прямой короткий гриф 15 кг" },
  { icon: "multiGym", label: "Многофункциональный тренажёр с заданной нагрузкой" },
  { icon: "mat", label: "Коврик" },
] as const;

export const studioPhotos = [
  { tint: "linear-gradient(135deg,#3a0d0a,#1a1a1a)", label: "Зал — Капсула №1" },
  { tint: "linear-gradient(135deg,#241212,#0f0f0f)", label: "Зал — Капсула №2" },
  { tint: "linear-gradient(135deg,#2a0f0c,#151515)", label: "Вход в студию" },
  { tint: "linear-gradient(135deg,#1c1c1c,#3a0d0a)", label: "Зона отдыха" },
  { tint: "linear-gradient(135deg,#301210,#101010)", label: "Раздевалка" },
  { tint: "linear-gradient(135deg,#191919,#331211)", label: "Оснащение крупным планом" },
];

export const studioReviews = [
  {
    name: "Мария Петрова",
    stars: 5,
    date: "21 августа 2026 г.",
    text: "",
    reply: "Мария! Благодарим вас за высокую оценку нашей работы. Будем рады вновь видеть вас на тренировках.",
  },
  {
    name: "Станислав Сергеевич Рубан",
    stars: 5,
    date: "21 августа 2026 г.",
    text: "Классное место.",
    reply:
      "Станислав Сергеевич! Мы очень рады, что вам понравилось. Будем рады видеть вас снова. Благодарим за высокую оценку. Для нас очень важно мнение каждого клиента.",
  },
  {
    name: "Ангелина Игоревна Ефимова",
    stars: 5,
    date: "20 августа 2026 г.",
    text: "Очень уютный зал, для базового тренинга все есть, на «вертикальной тяге» тугой трос достаточно, либо просто он сильно потёрся, немного грязновато, тренажёры в пыли, а так впечатления прекрасные 😅",
    reply: "Ангелина Игоревна! Благодарим за ваш отзыв. Мы обязательно учтём ваши замечания.",
  },
  {
    name: "Максим Андреевич Соколов",
    stars: 5,
    date: "19 августа 2026 г.",
    text: "Супер, очень классное место для тренировок",
    reply:
      "Мы очень рады, что вам понравилось. Для нас очень важно ваше мнение. Будем рады видеть вас снова.",
  },
  {
    name: "Яна Иванова",
    stars: 5,
    date: "5 августа 2026 г.",
    text: "Все отлично, я вернусь)",
    reply: "Яна! Благодарим вас за высокую оценку нашей работы. Будем рады видеть вас снова.",
  },
];

export const halls = [
  { id: "c1", name: "Зал 1", size: "3×3 м", equipment: "Кардио + силовая" },
  { id: "c2", name: "Зал 2", size: "3×3 м", equipment: "Функциональный тренинг" },
];

export const trainingTypeOptions = [
  "Кардиотренировка",
  "Силовая тренировка",
  "Фитнес на растяжку",
  "Смешанные тренировки",
  "Восточные практики",
];

export type HistoryEntry = {
  date: string;
  place: string;
  type: string;
  solo: boolean;
  bonus: number;
  weekday: string;
  day: string;
  timeStart: string;
  timeEnd: string;
  hrAvg: number;
  hrAvgPct: number;
  hrMax: number;
  hrMaxPct: number;
  hrMin: number;
  hrMinPct: number;
  calories: number;
};

export const history: HistoryEntry[] = [
  {
    date: "19 авг. 2026 г. · 20:00",
    place: "Stop For Fit — Путилково · Зал 1",
    type: "Всё тело",
    solo: true,
    bonus: 6,
    weekday: "среда",
    day: "19",
    timeStart: "20:00",
    timeEnd: "21:00",
    hrAvg: 135,
    hrAvgPct: 72,
    hrMax: 162,
    hrMaxPct: 86,
    hrMin: 98,
    hrMinPct: 52,
    calories: 356,
  },
  {
    date: "17 авг. 2026 г. · 19:00",
    place: "Stop For Fit — Путилково · Зал 2",
    type: "Верх тела",
    solo: false,
    bonus: 8,
    weekday: "понедельник",
    day: "17",
    timeStart: "19:00",
    timeEnd: "20:00",
    hrAvg: 128,
    hrAvgPct: 68,
    hrMax: 150,
    hrMaxPct: 80,
    hrMin: 92,
    hrMinPct: 49,
    calories: 298,
  },
  {
    date: "14 авг. 2026 г. · 21:00",
    place: "Stop For Fit — Путилково · Зал 1",
    type: "Кардио",
    solo: true,
    bonus: 5,
    weekday: "пятница",
    day: "14",
    timeStart: "21:00",
    timeEnd: "22:00",
    hrAvg: 148,
    hrAvgPct: 79,
    hrMax: 175,
    hrMaxPct: 93,
    hrMin: 110,
    hrMinPct: 58,
    calories: 402,
  },
  {
    date: "11 авг. 2026 г. · 18:00",
    place: "Stop For Fit — Путилково · Зал 2",
    type: "Ноги и ягодицы",
    solo: true,
    bonus: 6,
    weekday: "вторник",
    day: "11",
    timeStart: "18:00",
    timeEnd: "19:00",
    hrAvg: 133,
    hrAvgPct: 71,
    hrMax: 160,
    hrMaxPct: 85,
    hrMin: 95,
    hrMinPct: 51,
    calories: 331,
  },
];

export const trainingTypeStats = [
  { label: "Кардиотренировка", pct: 24 },
  { label: "Силовая тренировка", pct: 38 },
  { label: "Фитнес на растяжку", pct: 9 },
  { label: "Смешанная тренировка (кардио и сила)", pct: 22 },
  { label: "Восточные практики", pct: 7 },
];

export type MusclePart = "chest" | "shoulders" | "back" | "arms" | "legs" | "glutes" | "abs";

export const muscleGroups: { label: string; pct: number; part: MusclePart }[] = [
  { label: "Грудь", pct: 62, part: "chest" },
  { label: "Плечи", pct: 71, part: "shoulders" },
  { label: "Спина", pct: 55, part: "back" },
  { label: "Руки", pct: 68, part: "arms" },
  { label: "Ноги", pct: 84, part: "legs" },
  { label: "Ягодицы", pct: 49, part: "glutes" },
  { label: "Пресс", pct: 77, part: "abs" },
];

export const chats = [
  {
    name: "Техподдержка",
    preview: "Благодарим, передадим все руководству.",
    time: "19.08.2026 16:38",
  },
  {
    name: "Уведомления",
    preview:
      "Как прошла Ваша тренировка? Все ли понравилось? Огромная просьба поделиться впечатлениями.",
    time: "18.08.2026 22:00",
  },
];

export const faq = [
  "Открытие дверей",
  "Подписки",
  "Правило посещения студии",
  "Пульсометр",
  "Музыка",
  "Магазин",
];

export const legalItems = [
  "Оферта клиента",
  "Оферта тренера",
  "Бонусная система",
  "Правила посещения студии",
  "Согласие на обработку персональных данных",
  "Условия подписки",
  "Политика конфиденциальности",
];

export const reviews = [
  {
    place: "Stop For Fit — Путилково",
    stars: 5,
    date: "19 августа 2026 г.",
    text: "Супер, очень классное место для тренировок",
    reply:
      "Мы очень рады, что вам понравилось. Для нас очень важно ваше мнение. Будем рады видеть вас снова.",
  },
  {
    place: "Stop For Fit — Путилково",
    stars: 5,
    date: "14 августа 2026 г.",
    text: "Занимаюсь один в капсуле — это именно то, чего не хватало обычным залам. Никто не смотрит, можно спокойно сосредоточиться на технике.",
    reply:
      "Спасибо за отзыв! Именно для этого мы и делали формат индивидуальных капсул — рады, что он вам подходит.",
  },
  {
    place: "Stop For Fit — Химки",
    stars: 4,
    date: "9 августа 2026 г.",
    text: "Оборудование новое, всё чисто. Было бы отлично добавить ещё пару слотов вечером, в 20:00 сложно записаться.",
    reply:
      "Спасибо за обратную связь! Передали пожелание по расписанию администрации студии — уже прорабатываем расширение вечерних слотов.",
  },
];

export const ranking = [
  { name: "Оксана Викторовна", level: 8, calories: "66 429" },
  { name: "Артём Зацепа", level: 6, calories: "46 831" },
  { name: "Дмитрий Тоскин", level: 3, calories: "30 226" },
  { name: "Юсуф Розиков", level: 3, calories: "29 641" },
  { name: "Дмитрий Ковпак", level: 3, calories: "25 299" },
  { name: "Татьяна Батищева", level: 2, calories: "22 983" },
  { name: "Екатерина Ковпак", level: 2, calories: "22 799" },
  { name: "Хаким Абакаров", level: 2, calories: "21 549" },
  { name: "Артур Шупер", level: 2, calories: "19 893" },
];

export const bonusTx = [
  {
    date: "19.08.2026",
    items: [{ title: "Начисление бонусов", sub: "Первый отзыв на студию", time: "14:28", amount: 300 }],
  },
  {
    date: "18.08.2026",
    items: [
      { title: "Начисление бонусов", sub: "Бонусы за 1 тренировку на неделе", time: "22:10", amount: 5 },
      { title: "Списание бонусов", sub: "Запись на тренировку", time: "20:17", amount: -100 },
    ],
  },
  {
    date: "14.08.2026",
    items: [
      { title: "Начисление бонусов", sub: "Отмена записи на тренировку", time: "14:46", amount: 100 },
      { title: "Списание бонусов", sub: "Запись на тренировку", time: "14:20", amount: -100 },
    ],
  },
];

export const heartZones = [
  { label: "Максимальная 90-100%", color: "#e5484d", lo: 168, hi: "∞" },
  { label: "Анаэробная зона 80-90%", color: "#e58a2a", lo: 147, hi: 167 },
  { label: "Аэробная зона 70-80%", color: "#3fae4f", lo: 134, hi: 146 },
  { label: "Жиросжигание 60-70%", color: "#3a8fd1", lo: 115, hi: 133 },
  { label: "Восстановление 50-60%", color: "#8b6fd1", lo: 0, hi: 114 },
];
