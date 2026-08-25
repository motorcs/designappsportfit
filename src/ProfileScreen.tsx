import {
  ExitIcon,
  UserIcon,
  CoinIcon,
  ChartIcon,
  FlameIcon,
  DumbbellIcon,
  TrophyIcon,
  InfoIcon,
  ShieldIcon,
  StarIcon,
  HeartIcon,
  SparkIcon,
  DocIcon,
  CalendarIcon,
  MessageIcon,
  TagIcon,
  BuildingIcon,
  TrashIcon,
  ChevronRight,
} from "./icons";

export function ProfileScreen({
  onOpenChat,
  onOpenSubscription,
  onOpenStats,
}: {
  onOpenChat: () => void;
  onOpenSubscription: () => void;
  onOpenStats: () => void;
}) {
  const stats = [
    { Icon: ChartIcon, num: "2426", label: "Рейтинг SFF" },
    { Icon: FlameIcon, num: "1 240 ккал", label: "за все время" },
    { Icon: DumbbellIcon, num: "Новичок", label: "0 уровень" },
    { Icon: TrophyIcon, num: "342 ккал", label: "рекорд" },
  ];

  const items: { Icon: typeof InfoIcon; label: string; onClick?: () => void }[] = [
    { Icon: InfoIcon, label: "Личная информация" },
    { Icon: ShieldIcon, label: "Конфиденциальность" },
    { Icon: StarIcon, label: "Подписка", onClick: onOpenSubscription },
    { Icon: HeartIcon, label: "Пульсовые зоны" },
    { Icon: SparkIcon, label: "Тревожная кнопка" },
    { Icon: DocIcon, label: "Правовая информация" },
    { Icon: CalendarIcon, label: "Тренировочные планы" },
    { Icon: MessageIcon, label: "Сообщения", onClick: onOpenChat },
    { Icon: TagIcon, label: "Отзывы" },
    { Icon: DumbbellIcon, label: "Кабинет тренера" },
    { Icon: ChartIcon, label: "Статистика", onClick: onOpenStats },
    { Icon: BuildingIcon, label: "Корпорация" },
  ];

  return (
    <>
      <div className="profile-header">
        <h1>Профиль</h1>
        <button className="header-iconbtn">
          <ExitIcon />
        </button>
      </div>
      <div className="pad" style={{ paddingTop: 0 }}>
        <div className="profile-avatar-wrap">
          <div className="profile-avatar">
            <UserIcon />
          </div>
        </div>
        <div className="bonus-pill">
          <CoinIcon /> 305 бонусов <span className="delta">▲ 300</span>
        </div>
        <div className="stat-grid">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-card-icon">
                <s.Icon />
              </div>
              <div>
                <p className="stat-card-num">{s.num}</p>
                <p className="stat-card-label">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="profile-list">
          {items.map((it) => (
            <button className="profile-item" key={it.label} onClick={it.onClick}>
              <span className="profile-item-icon">
                <it.Icon />
              </span>
              <span className="plabel">{it.label}</span>
              <ChevronRight className="pchev" />
            </button>
          ))}
          <button className="profile-item danger">
            <span className="profile-item-icon">
              <TrashIcon />
            </span>
            <span className="plabel">Удалить профиль</span>
          </button>
        </div>
      </div>
    </>
  );
}
