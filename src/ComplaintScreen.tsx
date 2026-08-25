import { useState } from "react";
import { ChevronLeft, ChevronRight, SendIcon, HandIcon, CameraIcon } from "./icons";

export function ComplaintScreen({
  kind,
  onBack,
}: {
  kind: "studio" | "trainer";
  onBack: () => void;
}) {
  const [complaintText, setComplaintText] = useState("");
  const isTrainer = kind === "trainer";

  return (
    <div className="pad" style={{ paddingTop: 0 }}>
      <div className="topbar">
        <button className="iconbtn" onClick={onBack}>
          <ChevronLeft />
        </button>
        <h1 className="title" style={{ flex: 1 }}>
          Оставить жалобу
        </h1>
        <button className="iconbtn">
          <SendIcon />
        </button>
      </div>
      {isTrainer ? (
        <button
          className="card"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            marginBottom: 20,
            cursor: "pointer",
          }}
        >
          <span style={{ color: "var(--white)", fontSize: 13.5, fontWeight: 600 }}>
            Тренер не выбран
          </span>
          <ChevronRight />
        </button>
      ) : (
        <div className="card" style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
          <div className="logo-badge">
            <HandIcon />
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <p className="studio-name">ЖК "Большое Путилково"</p>
            <div className="studio-rating">4.9 · от 2 500 ₽</div>
          </div>
        </div>
      )}
      <p className="field-label-standalone">Текст жалобы</p>
      <textarea
        className="diary-textarea"
        maxLength={4096}
        value={complaintText}
        onChange={(e) => setComplaintText(e.target.value)}
      />
      <p className="char-count">{complaintText.length}/4096</p>
      <p className="field-label-standalone">Дополнить фотографией</p>
      <button className="iconbtn" style={{ width: 64, height: 64, borderRadius: 16, marginBottom: 16 }}>
        <CameraIcon />
      </button>
    </div>
  );
}
