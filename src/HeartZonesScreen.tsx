import { heartZones } from "./data";
import { ChevronLeft } from "./icons";

export function HeartZonesScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="pad" style={{ paddingTop: 0 }}>
      <div className="topbar">
        <button className="iconbtn" onClick={onBack}>
          <ChevronLeft />
        </button>
        <h1 className="title" style={{ flex: 1 }}>
          Пульсовые зоны
        </h1>
      </div>
      <p className="hz-intro">
        Мы рассчитали пульсовые зоны автоматически на основании данных о Вашем возрасте. Если Вам
        известны Ваши пульсовые зоны — можете указать их по своему усмотрению.
      </p>
      <button className="hz-auto-btn">Рассчитать автоматически</button>
      {heartZones.map((z) => (
        <div className="hz-row" key={z.label}>
          <div className="hz-chip" style={{ background: z.color }}>
            {z.label}
          </div>
          <input className="hz-input" defaultValue={z.lo} />
          <span className="hz-dash">–</span>
          <span className="hz-max">{z.hi}</span>
        </div>
      ))}
    </div>
  );
}
