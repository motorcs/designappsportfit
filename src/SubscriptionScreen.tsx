import { useState } from "react";
import { plans } from "./data";
import { ChevronLeft, StarIcon, TagIcon, CheckIcon } from "./icons";

export function SubscriptionScreen({ onBack }: { onBack: () => void }) {
  const [selected, setSelected] = useState("p12");
  const [promo, setPromo] = useState("");

  return (
    <div className="px-5 pb-4">
      <div className="flex items-center gap-3 pt-1 pb-4">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center text-white/80 shrink-0"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-white text-[17px] font-semibold">Приобрести подписку</h1>
      </div>

      <div className="flex items-center gap-3 rounded-2xl bg-white/[0.04] border border-white/[0.06] p-3 mb-5">
        <div className="w-11 h-11 rounded-full bg-[#C8FF3D]/15 border border-[#C8FF3D]/30 flex items-center justify-center shrink-0 text-[#C8FF3D] font-bold text-[13px]">
          CF
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-[14px] font-medium truncate">CAPS FIT — Путилково</p>
          <div className="flex items-center gap-1 text-[12px] text-white/50">
            <StarIcon className="w-3.5 h-3.5 text-[#C8FF3D]" filled />
            <span>4.9 · (860 отзывов)</span>
          </div>
        </div>
      </div>

      <div className="flex gap-2 mb-5">
        <input
          value={promo}
          onChange={(e) => setPromo(e.target.value)}
          placeholder="Промокод"
          className="flex-1 rounded-2xl bg-white/[0.05] border border-white/[0.08] px-4 py-3 text-[13px] text-white placeholder:text-white/35 outline-none focus:border-[#C8FF3D]/60"
        />
        <button
          disabled={!promo}
          className={`px-5 rounded-2xl text-[13px] font-semibold transition-colors ${
            promo ? "bg-[#C8FF3D] text-black" : "bg-white/[0.05] text-white/30"
          }`}
        >
          Применить
        </button>
      </div>

      <div className="flex items-center gap-2 rounded-2xl bg-[#C8FF3D]/[0.08] border border-[#C8FF3D]/25 px-3.5 py-2.5 mb-5">
        <div className="w-7 h-7 rounded-full bg-[#C8FF3D]/20 flex items-center justify-center shrink-0">
          <TagIcon className="w-3.5 h-3.5 text-[#C8FF3D]" />
        </div>
        <p className="text-[12.5px] text-[#C8FF3D]">
          <span className="font-semibold">10 ч 51 м</span> — скидка 10% на все планы
        </p>
      </div>

      <h2 className="text-white/90 text-[14.5px] font-semibold mb-2.5">Планы подписок</h2>
      <div className="flex flex-col gap-2.5 mb-6">
        {plans.map((p) => {
          const active = p.id === selected;
          return (
            <button
              key={p.id}
              onClick={() => setSelected(p.id)}
              className={`relative text-left rounded-2xl border p-4 transition-colors ${
                active
                  ? "border-[#C8FF3D] bg-[#C8FF3D]/[0.07]"
                  : "border-white/[0.08] bg-white/[0.03]"
              }`}
            >
              {(p.badge || p.savings) && (
                <div className="flex items-center gap-1.5 mb-2">
                  {p.badge && (
                    <span className="text-[10.5px] font-semibold px-2 py-0.5 rounded-full bg-[#4b7bff]/20 text-[#7ea2ff]">
                      {p.badge}
                    </span>
                  )}
                  {p.savings && (
                    <span className="text-[11px] font-semibold text-[#ff6b6b]">
                      {p.savings}
                    </span>
                  )}
                </div>
              )}
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-white text-[14px] font-semibold">{p.title}</p>
                  <p className="text-white/45 text-[11.5px] mt-0.5">{p.subtitle}</p>
                  {p.perSession && (
                    <p className="text-white/35 text-[11px] mt-1">
                      {p.perSession.toLocaleString("ru-RU")} ₽ за занятие
                    </p>
                  )}
                </div>
                <div className="flex flex-col items-end shrink-0">
                  <span className="text-white/30 text-[12px] line-through">
                    {p.oldPrice.toLocaleString("ru-RU")} ₽
                  </span>
                  <span className="text-white text-[16px] font-bold">
                    {p.price.toLocaleString("ru-RU")} ₽
                  </span>
                </div>
              </div>
              <div
                className={`absolute top-4 right-4 w-5 h-5 rounded-full border flex items-center justify-center ${
                  active ? "border-[#C8FF3D] bg-[#C8FF3D]" : "border-white/25"
                } ${p.badge || p.savings ? "hidden" : ""}`}
              >
                {active && <CheckIcon className="w-3 h-3 text-black" />}
              </div>
              {active && (p.badge || p.savings) && (
                <div className="absolute top-4 right-4 w-5 h-5 rounded-full border border-[#C8FF3D] bg-[#C8FF3D] flex items-center justify-center">
                  <CheckIcon className="w-3 h-3 text-black" />
                </div>
              )}
            </button>
          );
        })}
      </div>

      <button className="w-full py-3.5 rounded-2xl bg-[#C8FF3D] text-black text-[15px] font-semibold active:scale-[0.98] transition-transform">
        Оформить подписку
      </button>
    </div>
  );
}
