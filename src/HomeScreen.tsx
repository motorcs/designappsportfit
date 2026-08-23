import { StarIcon, ChevronRight, CapsuleIcon, PercentIcon } from "./icons";

export function HomeScreen({
  onOpenBooking,
  onOpenSubscription,
}: {
  onOpenBooking: () => void;
  onOpenSubscription: () => void;
}) {
  return (
    <div className="px-5 pb-4">
      <div className="pt-1 pb-5">
        <p className="text-white/45 text-[12.5px]">Доброе утро,</p>
        <h1 className="text-white text-[21px] font-semibold">Александр</h1>
      </div>

      <button
        onClick={onOpenSubscription}
        className="w-full flex items-center gap-3 rounded-2xl bg-[#C8FF3D]/[0.1] border border-[#C8FF3D]/25 p-3.5 mb-5 text-left"
      >
        <div className="w-10 h-10 rounded-full bg-[#C8FF3D] flex items-center justify-center shrink-0">
          <PercentIcon className="w-5 h-5 text-black" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[#C8FF3D] text-[13.5px] font-semibold">Приобретите подписку</p>
          <p className="text-white/50 text-[11.5px]">от 577,50 ₽ за занятие</p>
        </div>
        <ChevronRight className="w-5 h-5 text-[#C8FF3D] shrink-0" />
      </button>

      <h2 className="text-white/90 text-[14.5px] font-semibold mb-2.5">Ваша капсула-студия</h2>
      <button
        onClick={onOpenBooking}
        className="w-full rounded-2xl bg-white/[0.04] border border-white/[0.07] overflow-hidden text-left mb-6"
      >
        <div className="h-32 bg-gradient-to-br from-[#1c2a10] to-[#0e0f0c] flex items-center justify-center relative">
          <CapsuleIcon className="w-14 h-14 text-[#C8FF3D]/40" />
          <div className="absolute top-3 right-3 bg-black/50 backdrop-blur px-2 py-1 rounded-full text-[10.5px] text-[#C8FF3D] font-medium">
            3 капсулы свободно
          </div>
        </div>
        <div className="p-3.5">
          <div className="flex items-center justify-between mb-1">
            <p className="text-white text-[14px] font-medium">CAPS FIT — Путилково</p>
            <div className="flex items-center gap-1 text-[12px] text-white/60">
              <StarIcon className="w-3.5 h-3.5 text-[#C8FF3D]" filled />
              4.9
            </div>
          </div>
          <p className="text-white/45 text-[12px]">
            Индивидуальные тренировки в капсулах 3×3 м · со всем оборудованием
          </p>
        </div>
      </button>

      <h2 className="text-white/90 text-[14.5px] font-semibold mb-2.5">Ближайшая тренировка</h2>
      <div className="rounded-2xl bg-white/[0.04] border border-white/[0.07] p-3.5 flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-white/[0.06] flex flex-col items-center justify-center shrink-0">
          <span className="text-white text-[15px] font-bold leading-none">19</span>
          <span className="text-white/45 text-[10px] mt-0.5">авг</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-white text-[13.5px] font-medium">Капсула №1 · 20:00</p>
          <p className="text-white/45 text-[11.5px]">Самостоятельное посещение</p>
        </div>
        <ChevronRight className="w-4.5 h-4.5 text-white/30 shrink-0" />
      </div>
    </div>
  );
}
