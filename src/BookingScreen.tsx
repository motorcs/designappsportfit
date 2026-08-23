import { useState } from "react";
import { dates, times, capsules } from "./data";
import { ChevronLeft, ChevronRight, StarIcon, UserIcon, CapsuleIcon } from "./icons";

export function BookingScreen({
  onBack,
  onContinue,
}: {
  onBack: () => void;
  onContinue: () => void;
}) {
  const [dateIdx, setDateIdx] = useState(0);
  const [timeIdx, setTimeIdx] = useState(5);
  const [capsuleIdx, setCapsuleIdx] = useState(0);
  const [withTrainer, setWithTrainer] = useState(false);

  return (
    <div className="px-5 pb-4">
      <div className="flex items-center gap-3 pt-1 pb-4">
        <button
          onClick={onBack}
          className="w-9 h-9 rounded-full bg-white/[0.06] flex items-center justify-center text-white/80 shrink-0"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <h1 className="text-white text-[17px] font-semibold">Запись на тренировку</h1>
      </div>

      <div className="flex items-center gap-3 rounded-2xl bg-white/[0.04] border border-white/[0.06] p-3 mb-6">
        <div className="w-11 h-11 rounded-full bg-[#C8FF3D]/15 border border-[#C8FF3D]/30 flex items-center justify-center shrink-0">
          <CapsuleIcon className="w-5 h-5 text-[#C8FF3D]" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-[14px] font-medium truncate">CAPS FIT — Путилково</p>
          <div className="flex items-center gap-1 text-[12px] text-white/50">
            <StarIcon className="w-3.5 h-3.5 text-[#C8FF3D]" filled />
            <span>4.9 · (860 отзывов)</span>
          </div>
        </div>
        <button className="w-8 h-8 rounded-full bg-white/[0.06] flex items-center justify-center text-white/60 shrink-0">
          <StarIcon className="w-4 h-4" />
        </button>
      </div>

      <Section title="Выберите капсулу">
        <div className="flex flex-col gap-2">
          {capsules.map((c, i) => {
            const active = i === capsuleIdx;
            return (
              <button
                key={c.id}
                onClick={() => setCapsuleIdx(i)}
                className={`flex items-center gap-3 rounded-2xl border p-3 text-left transition-colors ${
                  active
                    ? "border-[#C8FF3D] bg-[#C8FF3D]/[0.08]"
                    : "border-white/[0.07] bg-white/[0.03]"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                    active ? "bg-[#C8FF3D] text-black" : "bg-white/[0.06] text-white/60"
                  }`}
                >
                  <CapsuleIcon className="w-5 h-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-white text-[13.5px] font-medium">{c.name}</p>
                  <p className="text-white/45 text-[12px]">
                    {c.size} · {c.equipment}
                  </p>
                </div>
                <div
                  className={`w-5 h-5 rounded-full border shrink-0 flex items-center justify-center ${
                    active ? "border-[#C8FF3D] bg-[#C8FF3D]" : "border-white/25"
                  }`}
                >
                  {active && <div className="w-2 h-2 rounded-full bg-black" />}
                </div>
              </button>
            );
          })}
        </div>
      </Section>

      <Section title="Выберите дату">
        <div className="flex gap-2 overflow-x-auto -mx-5 px-5 pb-1">
          {dates.map((d, i) => {
            const active = i === dateIdx;
            return (
              <button
                key={d.day}
                onClick={() => setDateIdx(i)}
                className={`shrink-0 w-16 py-3 rounded-2xl text-center transition-colors ${
                  active ? "bg-[#C8FF3D] text-black" : "bg-white/[0.05] text-white/70"
                }`}
              >
                <div className="text-[16px] font-semibold leading-tight">{d.day}</div>
                <div className="text-[10.5px] uppercase opacity-70">Авг</div>
                <div className="text-[11px] mt-0.5 opacity-80">{d.weekday}</div>
              </button>
            );
          })}
        </div>
      </Section>

      <Section title="Выберите время">
        <div className="grid grid-cols-4 gap-2">
          {times.map((t, i) => {
            const active = i === timeIdx;
            return (
              <button
                key={t}
                onClick={() => setTimeIdx(i)}
                className={`py-2.5 rounded-xl text-[13px] font-medium transition-colors ${
                  active
                    ? "bg-[#C8FF3D] text-black"
                    : "bg-white/[0.05] text-white/70 border border-white/[0.06]"
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </Section>

      <Section title="Тренер">
        <div className="flex gap-2">
          <button
            onClick={() => setWithTrainer(false)}
            className={`flex-1 flex items-center gap-2.5 rounded-2xl border p-3 text-left transition-colors ${
              !withTrainer
                ? "border-[#C8FF3D] bg-[#C8FF3D]/[0.08]"
                : "border-white/[0.07] bg-white/[0.03]"
            }`}
          >
            <div className="w-9 h-9 rounded-full bg-white/[0.07] flex items-center justify-center text-white/60 shrink-0">
              <UserIcon className="w-4.5 h-4.5" />
            </div>
            <div className="min-w-0">
              <p className="text-white text-[13px] font-medium">Самостоятельно</p>
              <p className="text-white/45 text-[11px]">Без тренера</p>
            </div>
          </button>
          <button
            onClick={() => setWithTrainer(true)}
            className={`flex-1 flex items-center gap-2.5 rounded-2xl border p-3 text-left transition-colors ${
              withTrainer
                ? "border-[#C8FF3D] bg-[#C8FF3D]/[0.08]"
                : "border-white/[0.07] bg-white/[0.03]"
            }`}
          >
            <div className="w-9 h-9 rounded-full bg-white/[0.07] flex items-center justify-center text-white/60 shrink-0">
              <ChevronRight className="w-4.5 h-4.5" />
            </div>
            <div className="min-w-0">
              <p className="text-white text-[13px] font-medium">С тренером</p>
              <p className="text-white/45 text-[11px]">Выбрать профи</p>
            </div>
          </button>
        </div>
      </Section>

      <button
        onClick={onContinue}
        className="w-full mt-2 py-3.5 rounded-2xl bg-[#C8FF3D] text-black text-[15px] font-semibold active:scale-[0.98] transition-transform"
      >
        Продолжить
      </button>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h2 className="text-white/90 text-[14.5px] font-semibold mb-2.5">{title}</h2>
      {children}
    </div>
  );
}
