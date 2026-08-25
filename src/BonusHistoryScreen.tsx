import { bonusTx } from "./data";
import { ChevronLeft, CoinIcon } from "./icons";

export function BonusHistoryScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="pad" style={{ paddingTop: 0 }}>
      <div className="topbar">
        <button className="iconbtn" onClick={onBack}>
          <ChevronLeft />
        </button>
        <h1 className="title" style={{ flex: 1 }}>
          История бонусов
        </h1>
      </div>
      <div className="balance-card">
        <div className="num">
          <CoinIcon /> 305
        </div>
        <p className="lbl">текущий баланс</p>
      </div>
      <div className="bonus-chip-row">
        <div className="bonus-chip pos">
          <div className="amt">▲ 305</div>
          <div className="lbl">начислено за неделю</div>
        </div>
        <div className="bonus-chip neg">
          <div className="amt">▼ 100</div>
          <div className="lbl">потрачено за неделю</div>
        </div>
        <div className="bonus-chip neutral">
          <div className="amt">505</div>
          <div className="lbl">начислено за все время</div>
        </div>
      </div>
      {bonusTx.map((g) => (
        <div key={g.date}>
          <p className="tx-date">{g.date}</p>
          {g.items.map((it, i) => (
            <div className="tx-row" key={i}>
              <div>
                <p className="title">{it.title}</p>
                <p className="sub">{it.sub}</p>
                <p className="time">{it.time}</p>
              </div>
              <span className={`tx-amount ${it.amount > 0 ? "pos" : "neg"}`}>
                {it.amount > 0 ? "+" : ""}
                {it.amount}
              </span>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
