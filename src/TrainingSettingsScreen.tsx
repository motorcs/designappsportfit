import { ChevronLeft, HeartIcon, BulbIcon, DumbbellWarnIcon, PersonWarnIcon } from "./icons";

export function TrainingSettingsScreen({
  onBack,
  onOpenSuggestForm,
  onOpenComplaintStudio,
  onOpenComplaintTrainer,
}: {
  onBack: () => void;
  onOpenSuggestForm: () => void;
  onOpenComplaintStudio: () => void;
  onOpenComplaintTrainer: () => void;
}) {
  const items = [
    { Icon: HeartIcon, label: "Датчики пульса", onClick: undefined },
    { Icon: BulbIcon, label: "Оставить предложение", onClick: onOpenSuggestForm },
    { Icon: DumbbellWarnIcon, label: "Оставить жалобу на студию", onClick: onOpenComplaintStudio },
    { Icon: PersonWarnIcon, label: "Оставить жалобу на тренера", onClick: onOpenComplaintTrainer },
  ];

  return (
    <div className="pad" style={{ paddingTop: 0 }}>
      <div className="topbar">
        <button className="iconbtn" onClick={onBack}>
          <ChevronLeft />
        </button>
        <h1 className="title" style={{ flex: 1 }}>
          Настройки
        </h1>
      </div>
      <div className="settings-grid">
        {items.map((it) => (
          <button className="settings-card" key={it.label} onClick={it.onClick}>
            <span className="settings-card-icon">
              <it.Icon />
            </span>
            <span>{it.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
