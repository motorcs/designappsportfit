import { useState } from "react";
import { ChevronLeft } from "./icons";

export function CorporationScreen({ onBack }: { onBack: () => void }) {
  const [code, setCode] = useState("");
  const filled = code.trim().length > 0;

  return (
    <div className="pad" style={{ paddingTop: 0 }}>
      <div className="topbar">
        <button className="iconbtn" onClick={onBack}>
          <ChevronLeft />
        </button>
        <h1 className="title" style={{ flex: 1 }}>
          Корпорация
        </h1>
      </div>
      <div className="form-field">
        <input value={code} onChange={(e) => setCode(e.target.value)} placeholder="Введите код" />
      </div>
      <button className="cta" disabled={!filled} style={{ opacity: filled ? 1 : 0.4 }}>
        Применить
      </button>
    </div>
  );
}
