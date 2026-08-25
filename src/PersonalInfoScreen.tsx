import { useState } from "react";
import { ChevronLeft, UserIcon, CalendarIcon } from "./icons";

export function PersonalInfoScreen({ onBack }: { onBack: () => void }) {
  const [gender, setGender] = useState<"m" | "f">("m");
  const [extra, setExtra] = useState("");

  return (
    <div className="pad" style={{ paddingTop: 0 }}>
      <div className="topbar">
        <button className="iconbtn" onClick={onBack}>
          <ChevronLeft />
        </button>
        <h1 className="title" style={{ flex: 1 }}>
          Личная информация
        </h1>
      </div>
      <div className="form-avatar-wrap">
        <div className="form-avatar">
          <UserIcon />
        </div>
      </div>
      <div className="form-field">
        <label>Имя</label>
        <input defaultValue="Данила" />
      </div>
      <div className="form-field">
        <label>Фамилия</label>
        <input defaultValue="Моторин" />
      </div>
      <div className="form-field">
        <label>Отчество</label>
        <input defaultValue="Сергеевич" />
      </div>
      <div className="form-field form-field-icon">
        <div style={{ flex: 1 }}>
          <label>Дата рождения</label>
          <input defaultValue="23.05.2005" />
        </div>
        <CalendarIcon />
      </div>
      <p className="field-label-standalone">Пол</p>
      <div className="segmented">
        <button className={gender === "m" ? "active" : ""} onClick={() => setGender("m")}>
          Мужской
        </button>
        <button className={gender === "f" ? "active" : ""} onClick={() => setGender("f")}>
          Женский
        </button>
      </div>
      <div className="form-field-row">
        <div className="form-field">
          <label>Рост</label>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <input defaultValue="185" />
            <span className="unit">см</span>
          </div>
        </div>
        <div className="form-field">
          <label>Вес</label>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <input defaultValue="75.0" />
            <span className="unit">кг</span>
          </div>
        </div>
      </div>
      <div className="form-field">
        <label>Телефон</label>
        <input defaultValue="+7 (991) 723 66 38" />
      </div>
      <div className="form-field">
        <label>Дополнительная информация</label>
        <textarea
          rows={4}
          value={extra}
          onChange={(e) => setExtra(e.target.value)}
          placeholder="Грыжа шейного отдела позвоночника"
        />
      </div>
      <p className="char-count">{extra.length}/1024</p>
    </div>
  );
}
