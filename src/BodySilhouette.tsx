import { muscleGroups, type MusclePart } from "./data";

export function BodySilhouette({ size = 96 }: { size?: number }) {
  const op = (part: MusclePart) => {
    const g = muscleGroups.find((m) => m.part === part);
    return g ? (0.2 + (g.pct / 100) * 0.7).toFixed(2) : "0.16";
  };

  return (
    <svg width={size} height={size * 1.68} viewBox="0 0 100 168" fill="none">
      <ellipse cx="50" cy="11" rx="9.5" ry="11" fill="var(--red)" fillOpacity={0.5} />
      <path d="M45 20h10v7h-10z" fill="var(--red)" fillOpacity={0.4} />
      <path
        d="M28 34c6-6 14-9 22-9s16 3 22 9c2 2 1 5-2 5-6-4-12-6-20-6s-14 2-20 6c-3 0-4-3-2-5z"
        fill="var(--red)"
        fillOpacity={op("shoulders")}
      />
      <path
        d="M33 33c5-2 11-3 17-3s12 1 17 3c3 8 3 17 0 25-5 3-11 4-17 4s-12-1-17-4c-3-8-3-17 0-25z"
        fill="var(--red)"
        fillOpacity={op("chest")}
      />
      <path
        d="M36 58c4 2 9 3 14 3s10-1 14-3c1 7 0 14-3 20-3 3-7 5-11 5s-8-2-11-5c-3-6-4-13-3-20z"
        fill="var(--red)"
        fillOpacity={op("abs")}
      />
      <path d="M25 34l5 30-4 10-6-3 2-32z" fill="var(--red)" fillOpacity={op("back")} />
      <path d="M75 34l-5 30 4 10 6-3-2-32z" fill="var(--red)" fillOpacity={op("back")} />
      <path
        d="M27 36c-6 3-10 10-11 20l-2 22c-1 4 4 6 6 2l3-9 6-24c1-4 1-8-2-11z"
        fill="var(--red)"
        fillOpacity={op("arms")}
      />
      <path
        d="M73 36c6 3 10 10 11 20l2 22c1 4-4 6-6 2l-3-9-6-24c-1-4-1-8 2-11z"
        fill="var(--red)"
        fillOpacity={op("arms")}
      />
      <circle cx="18" cy="82" r="4.5" fill="var(--red)" fillOpacity={op("arms")} />
      <circle cx="82" cy="82" r="4.5" fill="var(--red)" fillOpacity={op("arms")} />
      <path
        d="M38 83c4 2 8 3 12 3s8-1 12-3l3 12c-4 4-9 6-15 6s-11-2-15-6z"
        fill="var(--red)"
        fillOpacity={op("glutes")}
      />
      <path
        d="M39 95l-5 45c-1 5 3 8 6 6 2-1 3-3 3-5l4-40c1-3-1-6-4-6-2 0-3 0-4 0z"
        fill="var(--red)"
        fillOpacity={op("legs")}
      />
      <path
        d="M61 95l5 45c1 5-3 8-6 6-2-1-3-3-3-5l-4-40c-1-3 1-6 4-6 2 0 3 0 4 0z"
        fill="var(--red)"
        fillOpacity={op("legs")}
      />
      <path
        d="M40 141l-2 17c0 3 3 5 5 3l3-5 2 4c1 3 5 2 5-1l-3-18z"
        fill="var(--red)"
        fillOpacity={op("legs")}
      />
      <path
        d="M60 141l2 17c0 3-3 5-5 3l-3-5-2 4c-1 3-5 2-5-1l3-18z"
        fill="var(--red)"
        fillOpacity={op("legs")}
      />
      <g stroke="rgba(241,241,241,0.22)" strokeWidth={0.9} fill="none">
        <path d="M50 25v13M50 55v6M50 78v5" />
      </g>
    </svg>
  );
}
