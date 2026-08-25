import { muscleGroups, type MusclePart } from "./data";

export function BodySilhouette({ size = 96 }: { size?: number }) {
  const op = (part: MusclePart) => {
    const g = muscleGroups.find((m) => m.part === part);
    return g ? (0.3 + (g.pct / 100) * 0.65).toFixed(2) : "0.18";
  };

  const seam = "rgba(0,0,0,0.55)";
  const outline = "rgba(241,241,241,0.32)";
  const mopS = op("shoulders");
  const mopC = op("chest");
  const mopA = op("abs");
  const mopAr = op("arms");
  const mopG = op("glutes");
  const mopL = op("legs");

  const Arm = ({ mirror }: { mirror?: boolean }) => (
    <g transform={mirror ? "translate(100,0) scale(-1,1)" : undefined}>
      <rect x="14" y="52" width="15" height="32" rx="7.5" fill="var(--red)" fillOpacity={mopAr} stroke={seam} strokeWidth={1} />
      <circle cx="21.5" cy="86" r="6.5" fill="var(--red)" fillOpacity={mopAr} stroke={seam} strokeWidth={1} />
      <rect x="15.5" y="90" width="12" height="29" rx="6" fill="var(--red)" fillOpacity={mopAr} stroke={seam} strokeWidth={1} />
      <circle cx="21.5" cy="121" r="5.5" fill="var(--red)" fillOpacity={mopAr} stroke={seam} strokeWidth={1} />
      <path
        d="M13 124c-3 3-4 8-2 13 2 4 7 6 11 3 3-2 4-6 3-10 3 1 6-1 5-4-1-3-4-5-8-5-4-1-7 0-9 3z"
        fill="rgba(241,241,241,0.08)"
        stroke={outline}
        strokeWidth={1}
      />
    </g>
  );

  const Leg = ({ mirror }: { mirror?: boolean }) => (
    <g transform={mirror ? "translate(100,0) scale(-1,1)" : undefined}>
      <rect x="34" y="130" width="17" height="40" rx="8.5" fill="var(--red)" fillOpacity={mopL} stroke={seam} strokeWidth={1} />
      <circle cx="42.5" cy="172" r="7.5" fill="var(--red)" fillOpacity={mopL} stroke={seam} strokeWidth={1} />
      <rect x="36.5" y="177" width="12" height="18" rx="6" fill="var(--red)" fillOpacity={mopL} stroke={seam} strokeWidth={1} />
      <path
        d="M30 195c0-2 2-3 4-3h13c2 0 4 1 4 3 1 3-1 6-4 6H34c-3 0-5-3-4-6z"
        fill="rgba(241,241,241,0.08)"
        stroke={outline}
        strokeWidth={1}
      />
    </g>
  );

  const Shoulder = ({ mirror }: { mirror?: boolean }) => (
    <g transform={mirror ? "translate(100,0) scale(-1,1)" : undefined}>
      <circle cx="26" cy="47" r="13" fill="var(--red)" fillOpacity={mopS} stroke={seam} strokeWidth={1} />
    </g>
  );

  return (
    <svg width={size} height={size * 2} viewBox="0 0 100 200" fill="none">
      {/* head */}
      <ellipse cx="50" cy="20" rx="13" ry="15" fill="var(--red)" fillOpacity={0.48} stroke={seam} strokeWidth={1} />
      <path d="M38 12c3-5 7-7 12-7s9 2 12 7" stroke={outline} strokeWidth={1.3} fill="none" strokeLinecap="round" />
      <circle cx="37.5" cy="23" r="3.2" fill="var(--red)" fillOpacity={0.4} stroke={seam} strokeWidth={0.8} />
      <circle cx="62.5" cy="23" r="3.2" fill="var(--red)" fillOpacity={0.4} stroke={seam} strokeWidth={0.8} />
      {/* neck */}
      <rect x="44" y="33" width="12" height="9" rx="4" fill="var(--red)" fillOpacity={mopS} stroke={seam} strokeWidth={1} />
      <Arm />
      <Arm mirror />
      <Shoulder />
      <Shoulder mirror />
      {/* torso: chest + abs as two overlapping rounded pills so there is no seam */}
      <rect x="30" y="40" width="40" height="35" rx="17" fill="var(--red)" fillOpacity={mopC} stroke={seam} strokeWidth={1} />
      <rect x="32" y="69" width="36" height="30" rx="15" fill="var(--red)" fillOpacity={mopA} stroke={seam} strokeWidth={1} />
      {/* pelvis */}
      <path
        d="M30 97c6 4 13 6 20 6s14-2 20-6l-2 22c-4 6-11 10-18 10s-14-4-18-10z"
        fill="var(--red)"
        fillOpacity={mopG}
        stroke={seam}
        strokeWidth={1}
      />
      {/* definition lines drawn on top, stroke-only */}
      <g stroke={seam} strokeWidth={1.1} fill="none" strokeLinecap="round">
        <path d="M50 34v92" />
        <path d="M39 78h22M39.5 85h21M40.5 92h19" />
        <path d="M50 106v10M50 116l-11 12M50 116l11 12" />
      </g>
      <Leg />
      <Leg mirror />
    </svg>
  );
}
