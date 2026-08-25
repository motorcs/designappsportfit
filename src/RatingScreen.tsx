import { ranking } from "./data";
import { ChevronLeft, DotsIcon, UserIcon, DumbbellIcon, FlameIcon } from "./icons";

const tiers = ["gold", "silver", "bronze"];

export function RatingScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="pad" style={{ paddingTop: 0 }}>
      <div className="topbar">
        <button className="iconbtn" onClick={onBack}>
          <ChevronLeft />
        </button>
        <h1 className="title" style={{ flex: 1 }}>
          Рейтинг SFF
        </h1>
      </div>
      <button className="filter-pill">
        Все студии <DotsIcon />
      </button>
      <div className="filter-row">
        <button className="filter-pill">
          Любой пол <DotsIcon />
        </button>
        <button className="filter-pill">
          Все возраста <DotsIcon />
        </button>
      </div>
      <div className="rank-list">
        {ranking.map((r, i) => (
          <div className="rank-item" key={r.name}>
            <div className={`rank-badge ${tiers[i] || ""}`}>
              <span className="rank-num">{i + 1}</span>
              <div className="rank-avatar">
                <UserIcon />
              </div>
            </div>
            <div>
              <p className="rank-name">{r.name}</p>
              <div className="rank-meta">
                <span>
                  <DumbbellIcon /> {r.level} уровень
                </span>
                <span>
                  <FlameIcon /> {r.calories} калорий
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
