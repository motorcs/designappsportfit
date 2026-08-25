import { history } from "./data";
import { ChevronLeft, HomeIcon, PlayIcon, DotsIcon, ClockIcon, HeartIcon, FlameIcon } from "./icons";
import { BodySilhouette } from "./BodySilhouette";

const wkTabs = ["Тренировка", "Рекорды", "Дневник", "Таймеры", "Упражнения"];

export function WorkoutScreen({
  historyIdx,
  onBack,
  onHome,
}: {
  historyIdx: number;
  onBack: () => void;
  onHome: () => void;
}) {
  const w = history[historyIdx];

  return (
    <div>
      <div className="topbar" style={{ padding: "14px 20px 10px" }}>
        <button className="iconbtn" onClick={onBack}>
          <ChevronLeft />
        </button>
        <h1 className="title" style={{ flex: 1 }}>
          Тренировка
        </h1>
        <div className="wk-top-icons">
          <button className="iconbtn" onClick={onHome}>
            <HomeIcon />
          </button>
          <button className="iconbtn">
            <PlayIcon />
          </button>
          <button className="iconbtn">
            <DotsIcon />
          </button>
        </div>
      </div>

      <div className="wk-tabs">
        {wkTabs.map((t, i) => (
          <button key={t} className={`wk-tab ${i === 0 ? "active" : ""}`}>
            {t}
          </button>
        ))}
      </div>

      <div className="wk-time">
        <ClockIcon />
        {w.weekday}, {w.day} августа 2026 г., {w.timeStart} – {w.timeEnd}
      </div>

      <div className="pad" style={{ paddingTop: 16 }}>
        <div className="muscle-block">
          <BodySilhouette size={104} />
          <div style={{ flex: 1 }}>
            <p style={{ color: "var(--white)", fontSize: 14, fontWeight: 700, margin: "0 0 14px" }}>
              {w.type}
            </p>
            <div className="hr-stats">
              <div className="hr-row compact">
                <span className="hr-label">
                  <HeartIcon /> средняя ЧСС
                </span>
                <span className="hr-value">
                  {w.hrAvg} уд/мин <span>{w.hrAvgPct}% макс</span>
                </span>
              </div>
              <div className="hr-row compact">
                <span className="hr-label">
                  <HeartIcon /> макс ЧСС
                </span>
                <span className="hr-value">
                  {w.hrMax} уд/мин <span>{w.hrMaxPct}% макс</span>
                </span>
              </div>
              <div className="hr-row compact">
                <span className="hr-label">
                  <HeartIcon /> мин ЧСС
                </span>
                <span className="hr-value">
                  {w.hrMin} уд/мин <span>{w.hrMinPct}% макс</span>
                </span>
              </div>
              <div className="hr-row compact">
                <span className="hr-label">
                  <FlameIcon /> калории
                </span>
                <span className="hr-value">{w.calories} ккал</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
