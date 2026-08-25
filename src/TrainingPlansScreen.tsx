import { ChevronLeft } from "./icons";

export function TrainingPlansScreen({ onBack }: { onBack: () => void }) {
  return (
    <div className="pad" style={{ paddingTop: 0 }}>
      <div className="topbar">
        <button className="iconbtn" onClick={onBack}>
          <ChevronLeft />
        </button>
        <h1 className="title" style={{ flex: 1 }}>
          Тренировочные планы
        </h1>
      </div>
    </div>
  );
}
