import { useState } from "react";
import { plans } from "./data";
import { ChevronLeft, StarIcon, TagIcon, CheckIcon, HandIcon } from "./icons";

export function SubscriptionScreen({ onBack }: { onBack: () => void }) {
  const [selected, setSelected] = useState("p12");
  const [promo, setPromo] = useState("");
  const promoFilled = promo.trim().length > 0;

  return (
    <div className="pad">
      <div className="topbar">
        <button className="iconbtn" onClick={onBack}>
          <ChevronLeft />
        </button>
        <h1 className="title">Приобрести подписку</h1>
      </div>

      <div className="card">
        <div className="logo-badge">
          <HandIcon />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p className="studio-name">Stop For Fit — Путилково</p>
          <div className="studio-rating">
            <StarIcon filled />
            <span>4.9 · (860 отзывов)</span>
          </div>
        </div>
      </div>

      <div className="promo-input-row">
        <input
          className="promo-input"
          value={promo}
          onChange={(e) => setPromo(e.target.value)}
          placeholder="Промокод"
        />
        <button className={`promo-apply ${promoFilled ? "enabled" : ""}`} disabled={!promoFilled}>
          Применить
        </button>
      </div>

      <div className="discount-banner">
        <div className="badge">
          <TagIcon />
        </div>
        <p>
          <strong>10 ч 51 м</strong> — скидка 10% на все планы
        </p>
      </div>

      <h2 className="section">Планы подписок</h2>
      <div className="plans">
        {plans.map((p) => {
          const active = p.id === selected;
          return (
            <button
              key={p.id}
              className={`plan ${active ? "active" : ""}`}
              onClick={() => setSelected(p.id)}
            >
              <div className="plan-tags">
                {p.badge && <span className="tag-badge">{p.badge}</span>}
                {p.savings && <span className="tag-save">{p.savings}</span>}
              </div>
              <div className="plan-row">
                <div>
                  <p className="plan-title">{p.title}</p>
                  <p className="plan-sub">{p.subtitle}</p>
                  {p.perSession && (
                    <p className="plan-per">{p.perSession.toLocaleString("ru-RU")} ₽ за занятие</p>
                  )}
                </div>
                <div className="plan-prices">
                  <span className="plan-old">{p.oldPrice.toLocaleString("ru-RU")} ₽</span>
                  <span className="plan-new">{p.price.toLocaleString("ru-RU")} ₽</span>
                </div>
              </div>
              <div className="plan-check">
                <CheckIcon />
              </div>
            </button>
          );
        })}
      </div>

      <button className="cta">Оформить подписку</button>
    </div>
  );
}
