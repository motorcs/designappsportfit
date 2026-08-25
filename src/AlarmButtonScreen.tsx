import { useState } from "react";
import { ChevronLeft } from "./icons";
import { Toggle } from "./Toggle";

export function AlarmButtonScreen({ onBack }: { onBack: () => void }) {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="pad" style={{ paddingTop: 0 }}>
      <div className="topbar">
        <button className="iconbtn" onClick={onBack}>
          <ChevronLeft />
        </button>
        <h1 className="title" style={{ flex: 1 }}>
          Тревожная кнопка
        </h1>
      </div>
      <div className="alarm-row">
        <p>Включена</p>
        <Toggle on={enabled} onClick={() => setEnabled((v) => !v)} />
      </div>
      <p className="alarm-status">Номер телефона не задан</p>
      <button className="alarm-btn primary">Изменить номер</button>
      <button className="alarm-btn secondary">Сбросить номер</button>
    </div>
  );
}
