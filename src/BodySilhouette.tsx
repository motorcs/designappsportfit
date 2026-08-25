import { muscleGroups, type MusclePart } from "./data";

export function BodySilhouette({ size = 96 }: { size?: number }) {
  const op = (part: MusclePart) => {
    const g = muscleGroups.find((m) => m.part === part);
    return g ? (0.3 + (g.pct / 100) * 0.65).toFixed(2) : "0.18";
  };

  const seam = "rgba(0,0,0,0.6)";
  const outline = "rgba(241,241,241,0.3)";
  const mopS = op("shoulders");
  const mopC = op("chest");
  const mopA = op("abs");
  const mopAr = op("arms");
  const mopG = op("glutes");
  const mopL = op("legs");

  const torso =
    "M44 18 C44 14 56 14 56 18 L57 22 C61 24 65 28 68 35 C68 43 66 50 63 56 C67 60 68 66 66 73 C64 78 59 86 52 90 L48 90 C41 86 36 78 34 73 C32 66 33 60 37 56 C34 50 32 43 32 35 C35 28 39 24 43 22 Z";

  const Limbs = ({ mirror }: { mirror?: boolean }) => (
    <g transform={mirror ? "translate(100,0) scale(-1,1)" : undefined}>
      <path
        d="M31 36c-6 3-10 10-11 19l-1 15c0 3 2 5 5 5 2 0 4-2 4-4l1-13c1-6 3-11 6-16-1-2-3-4-4-6z"
        fill="var(--red)"
        fillOpacity={mopAr}
        stroke={seam}
        strokeWidth={1}
      />
      <path
        d="M24 70c-2 6-3 13-2 20l1 6c0 3 2 4 4 4 3 0 4-2 4-5l-1-16-1-9z"
        fill="var(--red)"
        fillOpacity={mopAr}
        stroke={seam}
        strokeWidth={1}
      />
      <path
        d="M25 100c-2 1-3 3-3 6 0 4 1 8 3 10 3 2 4-1 4-4l1-4 2 3c1 2 3 1 3-1l-1-4 2 2c1 1 3 0 2-2l-3-5c-3-2-6-2-10-1z"
        fill="rgba(241,241,241,0.07)"
        stroke={outline}
        strokeWidth={1}
      />
      <path
        d="M40 90l-4 38c-1 8 0 15 3 19 3 2 6 1 7-4l3-53z"
        fill="var(--red)"
        fillOpacity={mopL}
        stroke={seam}
        strokeWidth={1}
      />
    </g>
  );

  const Legs = ({ mirror }: { mirror?: boolean }) => (
    <g transform={mirror ? "translate(100,0) scale(-1,1)" : undefined}>
      <ellipse
        cx="43"
        cy="151"
        rx="5"
        ry="4"
        fill="var(--red)"
        fillOpacity={(parseFloat(mopL) * 0.85).toFixed(2)}
        stroke={seam}
        strokeWidth={1}
      />
      <path
        d="M38 155l-1 23c0 6 3 10 6 10s6-4 5-10l-1-23z"
        fill="var(--red)"
        fillOpacity={mopL}
        stroke={seam}
        strokeWidth={1}
      />
      <path
        d="M34 190c-4 1-6 4-6 7 0 4 4 6 9 5 3-1 5-3 5-6 0-2-1-5-3-6-2-1-3-1-5 0z"
        fill="rgba(241,241,241,0.07)"
        stroke={outline}
        strokeWidth={1}
      />
    </g>
  );

  const Deltoid = ({ mirror }: { mirror?: boolean }) => (
    <g transform={mirror ? "translate(100,0) scale(-1,1)" : undefined}>
      <path
        d="M25 32c0-6 5-9 10-8 4 1 7 5 7 10 0 6-4 11-9 11-5 0-8-4-9-9 0-2 0-3 1-4z"
        fill="var(--red)"
        fillOpacity={mopS}
        stroke={seam}
        strokeWidth={1}
      />
    </g>
  );

  return (
    <svg width={size} height={size * 2} viewBox="0 0 100 200" fill="none">
      <defs>
        <clipPath id="bsNeck2">
          <rect x="0" y="10" width="100" height="20" />
        </clipPath>
        <clipPath id="bsChest2">
          <rect x="0" y="30" width="100" height="28" />
        </clipPath>
        <clipPath id="bsAbs2">
          <rect x="0" y="58" width="100" height="16" />
        </clipPath>
        <clipPath id="bsHip2">
          <rect x="0" y="74" width="100" height="16" />
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
      <Limbs />
      <Limbs mirror />
      {/* neck / shoulders / chest / abs / hip zones share one outline so nothing floats or gaps */}
      <path d={torso} fill="var(--red)" fillOpacity={mopS} clipPath="url(#bsNeck2)" />
      <path d={torso} fill="var(--red)" fillOpacity={mopC} clipPath="url(#bsChest2)" />
      <path d={torso} fill="var(--red)" fillOpacity={mopA} clipPath="url(#bsAbs2)" />
      <path d={torso} fill="var(--red)" fillOpacity={mopG} clipPath="url(#bsHip2)" />
      <path d={torso} fill="none" stroke={seam} strokeWidth={1} />
      {/* muscle definition lines, stroke-only so they never create seams/gaps */}
      <g stroke={seam} strokeWidth={1} fill="none" strokeLinecap="round">
        <path d="M50 35v55" />
        <path d="M35 38c6 4 9 4 15 4s9 0 15-4" />
        <path d="M40 62h20M41 68h18M42.5 74h15" />
        <path d="M37 58l-4 16M63 58l4 16" />
      </g>
      <Deltoid />
      <Deltoid mirror />
      <Legs />
      <Legs mirror />
    </svg>
  );
}
