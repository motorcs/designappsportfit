import { useState } from "react";
import { ChevronLeft, SendIcon, HandIcon, CameraIcon } from "./icons";

export function SuggestFormScreen({ onBack }: { onBack: () => void }) {
  const [suggestText, setSuggestText] = useState("");

  return (
    <div className="pad" style={{ paddingTop: 0 }}>
      <div className="topbar">
        <button className="iconbtn" onClick={onBack}>
          <ChevronLeft />
        </button>
        <h1 className="title" style={{ flex: 1 }}>
          Оставить предложение
        </h1>
        <button className="iconbtn">
          <SendIcon />
        </button>
      </div>
      <div className="card" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
        <div className="logo-badge">
          <HandIcon />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p className="studio-name">ЖК "Большое Путилково"</p>
          <div className="studio-rating">4.9 · от 2 500 ₽</div>
        </div>
      </div>
      <p className="field-label-standalone">Текст предложения</p>
      <textarea
        className="diary-textarea"
        maxLength={4096}
        value={suggestText}
        onChange={(e) => setSuggestText(e.target.value)}
      />
      <p className="char-count">{suggestText.length}/4096</p>
      <p className="field-label-standalone">Дополнить фотографией</p>
      <button className="iconbtn" style={{ width: 64, height: 64, borderRadius: 16, marginBottom: 16 }}>
        <CameraIcon />
      </button>
    </div>
  );
}
