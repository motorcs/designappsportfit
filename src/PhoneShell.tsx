import type { ReactNode } from "react";

export function PhoneShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-[390px] max-w-full h-[844px] max-h-[92svh] rounded-[46px] border-[10px] border-[#101010] bg-[#1a1a1a] overflow-hidden shadow-[0_30px_80px_-20px_rgba(0,0,0,0.7)] flex flex-col">
      <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#101010] rounded-full z-30" />
      <StatusBar />
      <div className="flex-1 overflow-y-auto overscroll-contain">{children}</div>
    </div>
  );
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-7 pt-3 pb-2 text-[13px] font-medium text-white/90 shrink-0">
      <span>9:41</span>
      <div className="flex items-center gap-1.5 text-white/70">
        <svg width="18" height="12" viewBox="0 0 18 12" fill="none">
          <rect x="0" y="7" width="3" height="5" rx="0.5" fill="currentColor" />
          <rect x="5" y="5" width="3" height="7" rx="0.5" fill="currentColor" />
          <rect x="10" y="3" width="3" height="9" rx="0.5" fill="currentColor" />
          <rect x="15" y="0" width="3" height="12" rx="0.5" fill="currentColor" />
        </svg>
        <svg width="16" height="12" viewBox="0 0 16 12" fill="none">
          <path
            d="M8 9.5a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6zM3.8 6.6a5.9 5.9 0 0 1 8.4 0M1.2 3.9a9.6 9.6 0 0 1 13.6 0"
            stroke="currentColor"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
        </svg>
        <div className="flex items-center gap-0.5">
          <div className="w-5 h-2.5 rounded-[3px] border border-white/70 flex items-center px-[1.5px]">
            <div className="h-full w-3/4 bg-[#F1F1F1] rounded-[1px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
