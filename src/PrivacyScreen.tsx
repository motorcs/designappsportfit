import { useState } from "react";
import { ChevronLeft } from "./icons";
import { Toggle } from "./Toggle";

export function PrivacyScreen({ onBack }: { onBack: () => void }) {
  const [phone, setPhone] = useState(false);
  const [photo, setPhoto] = useState(true);
  const [name, setName] = useState(true);

  return (
    <>
      <div className="screen-header">
        <button
          className="header-iconbtn"
          onClick={onBack}
          style={{ position: "absolute", left: 16 }}
        >
          <ChevronLeft />
        </button>
        <h1 style={{ flex: 1, textAlign: "center" }}>Конфиденциальность</h1>
      </div>
      <div className="privacy-row">
        <p>Показывать номер телефона тренеру</p>
        <Toggle on={phone} onClick={() => setPhone((v) => !v)} />
      </div>
      <div className="privacy-row">
        <p>Показывать фотографию в рейтинге</p>
        <Toggle on={photo} onClick={() => setPhoto((v) => !v)} />
      </div>
      <div className="privacy-row">
        <p>Показывать имя в рейтинге</p>
        <Toggle on={name} onClick={() => setName((v) => !v)} />
      </div>
    </>
  );
}
