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
  sessions: number | "unlim";
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
    sessions: 4,
    oldPrice: 4400,
    price: 3960,
    perSession: 990,
  },
  {
    id: "p8",
    title: "8 занятий в месяц",
    subtitle: "8 занятий на 1 месяц",
    sessions: 8,
    oldPrice: 6600,
    price: 5940,
    perSession: 742.5,
    savings: "Экономия 25%",
  },
  {
    id: "p12",
    title: "12 занятий в месяц",
    subtitle: "12 занятий на 1 месяц",
    sessions: 12,
    oldPrice: 7700,
    price: 6930,
    perSession: 577.5,
    savings: "Экономия 42%",
  },
  {
    id: "unlim",
    title: "Безлимит на месяц",
    subtitle: "Без ограничений по количеству занятий",
    sessions: "unlim",
    oldPrice: 5500,
    price: 4950,
    badge: "Максимальная выгода",
  },
];

export const capsules = [
  { id: "c1", name: "Капсула №1", size: "3×3 м", equipment: "Кардио + силовая" },
  { id: "c2", name: "Капсула №2", size: "3×3 м", equipment: "Функциональный тренинг" },
  { id: "c3", name: "Капсула №3", size: "3×3 м", equipment: "Свободные веса" },
];
