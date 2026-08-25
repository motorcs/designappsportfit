import { useState } from "react";
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
import { DeleteProfileModal } from "./DeleteProfileModal";

export function ProfileScreen({
  onOpenChat,
  onOpenSubscription,
  onOpenStats,
  onOpenPersonalInfo,
  onOpenPrivacy,
  onOpenHeartZones,
  onOpenAlarmButton,
  onOpenLegalInfo,
  onOpenReviews,
  onOpenTrainerCabinet,
  onOpenCorporation,
  onOpenRating,
  onOpenBonusHistory,
  onOpenTrainingPlans,
}: {
  onOpenChat: () => void;
  onOpenSubscription: () => void;
  onOpenStats: () => void;
  onOpenPersonalInfo: () => void;
  onOpenPrivacy: () => void;
  onOpenHeartZones: () => void;
  onOpenAlarmButton: () => void;
  onOpenLegalInfo: () => void;
  onOpenReviews: () => void;
  onOpenTrainerCabinet: () => void;
  onOpenCorporation: () => void;
  onOpenRating: () => void;
  onOpenBonusHistory: () => void;
  onOpenTrainingPlans: () => void;
}) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);

  const stats = [
    { Icon: ChartIcon, num: "2426", label: "Рейтинг SFF", onClick: onOpenRating },
    { Icon: FlameIcon, num: "1 240 ккал", label: "за все время" },
    { Icon: DumbbellIcon, num: "Новичок", label: "0 уровень" },
    { Icon: TrophyIcon, num: "342 ккал", label: "рекорд" },
  ];

  const items: { Icon: typeof InfoIcon; label: string; onClick?: () => void }[] = [
    { Icon: InfoIcon, label: "Личная информация", onClick: onOpenPersonalInfo },
    { Icon: ShieldIcon, label: "Конфиденциальность", onClick: onOpenPrivacy },
    { Icon: StarIcon, label: "Подписка", onClick: onOpenSubscription },
    { Icon: HeartIcon, label: "Пульсовые зоны", onClick: onOpenHeartZones },
    { Icon: SparkIcon, label: "Тревожная кнопка", onClick: onOpenAlarmButton },
    { Icon: DocIcon, label: "Правовая информация", onClick: onOpenLegalInfo },
    { Icon: CalendarIcon, label: "Тренировочные планы", onClick: onOpenTrainingPlans },
    { Icon: MessageIcon, label: "Сообщения", onClick: onOpenChat },
    { Icon: TagIcon, label: "Отзывы", onClick: onOpenReviews },
    { Icon: DumbbellIcon, label: "Кабинет тренера", onClick: onOpenTrainerCabinet },
    { Icon: ChartIcon, label: "Статистика", onClick: onOpenStats },
    { Icon: BuildingIcon, label: "Корпорация", onClick: onOpenCorporation },
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
        <button
          className="bonus-pill"
          style={{ width: "100%", border: "1px solid #3fae4f", cursor: "pointer" }}
          onClick={onOpenBonusHistory}
        >
          <CoinIcon /> 305 бонусов <span className="delta">▲ 300</span>
        </button>
        <div className="stat-grid">
          {stats.map((s) => (
            <button
              className="stat-card"
              key={s.label}
              onClick={s.onClick}
              style={{ textAlign: "left", cursor: s.onClick ? "pointer" : "default" }}
            >
              <div className="stat-card-icon">
                <s.Icon />
              </div>
              <div>
                <p className="stat-card-num">{s.num}</p>
                <p className="stat-card-label">{s.label}</p>
              </div>
            </button>
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
          <button className="profile-item danger" onClick={() => setDeleteModalOpen(true)}>
            <span className="profile-item-icon">
              <TrashIcon />
            </span>
            <span className="plabel">Удалить профиль</span>
          </button>
        </div>
      </div>
      {deleteModalOpen && (
        <DeleteProfileModal
          onConfirm={() => setDeleteModalOpen(false)}
          onCancel={() => setDeleteModalOpen(false)}
        />
      )}
    </>
  );
}
