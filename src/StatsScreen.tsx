import { history, trainingTypeStats, muscleGroups } from "./data";
import { ChevronLeft, ChevronRight, HeartIcon, FlameIcon, RefreshIcon } from "./icons";
import { BodySilhouette } from "./BodySilhouette";

export function StatsScreen({ onBack }: { onBack: () => void }) {
  const soloPct = 64;

  return (
    <div className="pad" style={{ paddingTop: 0 }}>
      <div className="topbar">
        <button className="iconbtn" onClick={onBack}>
          <ChevronLeft />
        </button>
        <h1 className="title" style={{ flex: 1 }}>
          Статистика
        </h1>
      </div>

      <div className="stats-brand">
        <svg viewBox="0 0 200 60" height="40">
          <text
            x="100"
            y="24"
            textAnchor="middle"
            fontFamily="Poppins"
            fontWeight="800"
            fontSize="24"
            fill="var(--white)"
          >
            STOP
          </text>
          <text
            x="100"
            y="50"
            textAnchor="middle"
            fontFamily="Poppins"
            fontWeight="800"
            fontSize="24"
            fill="var(--red)"
          >
            FOR FIT
          </text>
        </svg>
      </div>

      <h2 className="section">Общая статистика</h2>
      <div className="stats-select">
        <span>За все время</span>
        <ChevronRight />
      </div>
      <p className="stats-count">{history.length} тренировки</p>

      <div className="donut-row">
        <div
          className="donut"
          style={{
            background: `conic-gradient(var(--red) 0% ${soloPct}%, rgba(241,241,241,0.15) ${soloPct}% 100%)`,
          }}
        >
          <div className="donut-hole">{soloPct}%</div>
        </div>
        <div className="donut-legend">
          <div className="legend-row">
            <span className="legend-dot" style={{ background: "var(--red)" }} />
            Самостоятельных
          </div>
          <div className="legend-row">
            <span className="legend-dot" style={{ background: "rgba(241,241,241,0.3)" }} />
            С тренером
          </div>
        </div>
      </div>

      <div className="hr-stats">
        <div className="hr-row">
          <span className="hr-label">
            <HeartIcon /> средняя ЧСС
          </span>
          <span className="hr-value">
            128 уд/мин <span>68% макс</span>
          </span>
        </div>
        <div className="hr-row">
          <span className="hr-label">
            <HeartIcon /> макс ЧСС
          </span>
          <span className="hr-value">
            166 уд/мин <span>88% макс</span>
          </span>
        </div>
        <div className="hr-row">
          <span className="hr-label">
            <HeartIcon /> мин ЧСС
          </span>
          <span className="hr-value">
            94 уд/мин <span>50% макс</span>
          </span>
        </div>
        <div className="hr-row">
          <span className="hr-label">
            <FlameIcon /> калории
          </span>
          <span className="hr-value">342 ккал</span>
        </div>
      </div>

      <div className="divider" />

      <div className="type-list">
        {trainingTypeStats.map((t) => (
          <div className="type-row" key={t.label}>
            <p>
              {t.label}
              <span>{t.pct}%</span>
            </p>
            <div className="type-bar-track">
              <div className="type-bar-fill" style={{ width: `${t.pct}%` }} />
            </div>
          </div>
        ))}
      </div>

      <div className="divider" />

      <h2 className="section">Статистика по группам мышц</h2>
      <div className="muscle-block">
        <div className="body-svg-wrap">
          <button className="refresh-btn">
            <RefreshIcon />
          </button>
          <BodySilhouette size={96} />
        </div>
        <div className="muscle-list">
          {muscleGroups.map((m) => (
            <div className="muscle-row" key={m.label}>
              <p>
                {m.label}
                <span>{m.pct}%</span>
              </p>
              <div className="muscle-bar-track">
                <div className="muscle-bar-fill" style={{ width: `${m.pct}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
