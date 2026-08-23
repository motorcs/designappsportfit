import { HomeIcon, DumbbellIcon, ChartIcon, UserIcon } from "./icons";

export type Tab = "home" | "workouts" | "progress" | "profile";

const items: { id: Tab; label: string; Icon: typeof HomeIcon }[] = [
  { id: "home", label: "Главная", Icon: HomeIcon },
  { id: "workouts", label: "Тренировки", Icon: DumbbellIcon },
  { id: "progress", label: "Прогресс", Icon: ChartIcon },
  { id: "profile", label: "Профиль", Icon: UserIcon },
];

export function BottomNav({
  active,
  onChange,
}: {
  active: Tab;
  onChange: (tab: Tab) => void;
}) {
  return (
    <div className="shrink-0 border-t border-white/[0.06] bg-[#111209]/95 backdrop-blur px-2 pt-2 pb-6">
      <div className="flex items-center justify-around">
        {items.map(({ id, label, Icon }) => {
          const isActive = active === id;
          return (
            <button
              key={id}
              onClick={() => onChange(id)}
              className="flex flex-col items-center gap-1 py-1 px-3 rounded-xl transition-colors"
            >
              <Icon
                className={`w-6 h-6 transition-colors ${
                  isActive ? "text-[#C8FF3D]" : "text-white/35"
                }`}
              />
              <span
                className={`text-[10.5px] transition-colors ${
                  isActive ? "text-[#C8FF3D]" : "text-white/35"
                }`}
              >
                {label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
