import { useEffect } from "react";
import { HandIcon } from "./icons";

export function SplashScreen({ onDone }: { onDone: () => void }) {
  useEffect(() => {
    const t = setTimeout(onDone, 5000);
    return () => clearTimeout(t);
  }, [onDone]);

  const pulse = (
    <svg viewBox="0 0 230 46" fill="none">
      <path
        d="M0,25 H62 L72,10 L82,40 L92,4 L100,25 H230"
        stroke="var(--red)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="splash-logo">
          <HandIcon />
        </div>
        <div className="splash-word">
          <span className="l1">STOP</span>
          <span className="l2">FOR FIT</span>
        </div>
      </div>
      <div className="pulse-wrap">
        <div className="pulse-track">
          {pulse}
          {pulse}
        </div>
      </div>
    </div>
  );
}
