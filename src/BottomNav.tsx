import { MapPinIcon, CalendarIcon, DumbbellIcon, MessageIcon, UserIcon } from "./icons";

export type Tab = "studios" | "history" | "workout" | "chat" | "profile";

const items: { id: Tab; label: string; Icon: typeof MapPinIcon }[] = [
  { id: "studios", label: "Студии", Icon: MapPinIcon },
  { id: "history", label: "История", Icon: CalendarIcon },
  { id: "workout", label: "Тренировки", Icon: DumbbellIcon },
  { id: "chat", label: "Чат", Icon: MessageIcon },
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
    <div className="navbar">
      {items.map(({ id, label, Icon }) => (
        <button
          key={id}
          className={`navitem ${active === id ? "active" : ""}`}
          onClick={() => onChange(id)}
        >
          <Icon />
          <span>{label}</span>
        </button>
      ))}
    </div>
  );
}
