import { muscleGroups, type MusclePart } from "./data";

export function BodySilhouette({ size = 96 }: { size?: number }) {
  const op = (part: MusclePart) => {
    const g = muscleGroups.find((m) => m.part === part);
    return g ? (0.3 + (g.pct / 100) * 0.65).toFixed(2) : "0.18";
  };

  const seam = "rgba(0,0,0,0.6)";
  const outline = "rgba(241,241,241,0.35)";
  const mopS = op("shoulders");
  const mopC = op("chest");
  const mopA = op("abs");
  const mopAr = op("arms");
  const mopG = op("glutes");
  const mopL = op("legs");

  const torso =
    "M44 18 C44 14 56 14 56 18 L57 22 C61 24 65 28 68 35 C68 43 66 50 63 56 C67 60 68 66 66 73 C64 90 58 108 52 120 L48 120 C42 108 36 90 34 73 C32 66 33 60 37 56 C34 50 32 43 32 35 C35 28 39 24 43 22 Z";

  const Arm = ({ mirror }: { mirror?: boolean }) => (
    <g transform={mirror ? "translate(100,0) scale(-1,1)" : undefined}>
      <ellipse cx="21" cy="37" rx="8.5" ry="7.5" fill="var(--red)" fillOpacity={mopS} stroke={seam} strokeWidth={1} />
      <path
        d="M17 38c-2 6-3 14-3 24 0 8 1 14 3 20 1 3 5 4 8 2 2-1 3-3 3-6 1-10 1-22 0-32-1-5-2-8-4-9-3-2-6-1-7 1z"
        fill="var(--red)"
        fillOpacity={mopAr}
        stroke={seam}
        strokeWidth={1}
      />
      <path d="M17 63c-1 4-1 9 0 13" stroke={seam} strokeWidth={0.9} fill="none" strokeLinecap="round" />
      <path
        d="M18 82c-2 1-3 3-3 6 0 4 1 8 3 10 3 2 4-1 4-4l1-4 2 3c1 2 3 1 3-1l-1-4 2 2c1 1 3 0 2-2l-3-5c-3-2-6-2-10-1z"
        fill="rgba(241,241,241,0.08)"
        stroke={outline}
        strokeWidth={1}
      />
    </g>
  );

  const Leg = ({ mirror }: { mirror?: boolean }) => (
    <g transform={mirror ? "translate(100,0) scale(-1,1)" : undefined}>
      <path
        d="M40 120l-4 38c-1 8 0 15 3 19 3 2 6 1 7-4l3-53z"
        fill="var(--red)"
        fillOpacity={mopL}
        stroke={seam}
        strokeWidth={1}
      />
      <ellipse
        cx="43"
        cy="181"
        rx="6.5"
        ry="5.5"
        fill="var(--red)"
        fillOpacity={(parseFloat(mopL) * 0.85).toFixed(2)}
        stroke={seam}
        strokeWidth={1}
      />
      <path
        d="M38 186l-1 20c0 6 3 9 6 9s6-3 5-9l-1-20z"
        fill="var(--red)"
        fillOpacity={mopL}
        stroke={seam}
        strokeWidth={1}
      />
      <path
        d="M34 213c-4 1-6 4-6 7 0 4 4 6 9 5 3-1 5-3 5-6 0-2-1-5-3-6-2-1-3-1-5 0z"
        fill="rgba(241,241,241,0.08)"
        stroke={outline}
        strokeWidth={1}
      />
    </g>
  );

  return (
    <svg width={size} height={size * 2.3} viewBox="0 0 100 230" fill="none">
      <defs>
        <clipPath id="bsNeckA">
          <rect x="0" y="10" width="100" height="20" />
        </clipPath>
        <clipPath id="bsChestA">
          <rect x="0" y="30" width="100" height="28" />
        </clipPath>
        <clipPath id="bsAbsA">
          <rect x="0" y="58" width="100" height="42" />
        </clipPath>
        <clipPath id="bsHipA">
          <rect x="0" y="100" width="100" height="20" />
        </clipPath>
      </defs>
      {/* head + hair */}
      <path
        d="M50 4c6 0 10 5 10 11 0 4-1 7.5-3.5 10.5-2 2.5-4 4-6.5 5-2.5-1-4.5-2.5-6.5-5C41 22.5 40 19 40 15c0-6 4-11 10-11z"
        fill="rgba(241,241,241,0.06)"
        stroke={outline}
        strokeWidth={1}
      />
      <path
        d="M40.5 10c2-4.5 5.5-7 9.5-7s7.5 2.5 9.5 7c.7 1.6.9 3 .7 4.5-3-2.7-6-4-10.2-4s-7.2 1.3-10.2 4c-.2-1.5 0-2.9.7-4.5z"
        fill="rgba(20,20,20,0.85)"
        stroke={outline}
        strokeWidth={0.8}
      />
      <Arm />
      <Arm mirror />
      {/* torso: neck / shoulders / chest / abs / groin zones share one outline so nothing gaps */}
      <path d={torso} fill="var(--red)" fillOpacity={mopS} clipPath="url(#bsNeckA)" />
      <path d={torso} fill="var(--red)" fillOpacity={mopC} clipPath="url(#bsChestA)" />
      <path d={torso} fill="var(--red)" fillOpacity={mopA} clipPath="url(#bsAbsA)" />
      <path d={torso} fill="var(--red)" fillOpacity={mopG} clipPath="url(#bsHipA)" />
      <path d={torso} fill="none" stroke={seam} strokeWidth={1} />
      {/* muscle definition lines, stroke-only so they never create seams/gaps */}
      <g stroke={seam} strokeWidth={1.1} fill="none" strokeLinecap="round">
        <path d="M50 35v85" />
        <path d="M35 38c6 4 9 4 15 4s9 0 15-4" />
        <path d="M40 63h20M40.5 71h19M41.5 79h17" />
        <path d="M37 58l-5 15M63 58l5 15" />
        <path d="M36 55l4 4M64 55l-4 4M35 62l4 3M65 62l-4 3" />
        <path d="M50 108v12M50 120l-13 14M50 120l13 14" />
      </g>
      <Leg />
      <Leg mirror />
    </svg>
  );
}
