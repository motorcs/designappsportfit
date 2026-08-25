import { history } from "./data";
import { ChartIcon, DumbbellIcon, UserIcon, CoinIcon, ChevronRight } from "./icons";

export function HistoryScreen({
  onOpenStats,
  onOpenWorkout,
}: {
  onOpenStats: () => void;
  onOpenWorkout: (idx: number) => void;
}) {
  return (
    <>
      <div className="screen-header">
        <h1>История тренировок</h1>
        <button className="header-iconbtn" onClick={onOpenStats}>
          <ChartIcon />
        </button>
      </div>
      <div className="hist-list">
        {history.map((h, i) => (
          <button key={i} className="hist-item" onClick={() => onOpenWorkout(i)}>
            <div className="hist-dot" />
            <div className="hist-body">
              <p className="hist-date">{h.date}</p>
              <p className="hist-place">{h.place}</p>
              <div className="hist-tags">
                <span className="hist-tag">
                  <DumbbellIcon /> {h.type}
                </span>
                <span className="hist-tag">
                  <UserIcon /> {h.solo ? "Самостоятельно" : "С тренером"}
                </span>
                <span className="hist-tag">
                  <CoinIcon /> {h.bonus} бонусов
                </span>
              </div>
            </div>
            <span className="hist-chev">
              <ChevronRight />
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
