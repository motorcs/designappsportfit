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
