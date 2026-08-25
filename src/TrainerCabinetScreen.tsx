import { useState } from "react";
import { ChevronLeft, UserIcon, CameraIcon } from "./icons";

export function TrainerCabinetScreen({ onBack }: { onBack: () => void }) {
  const [about, setAbout] = useState("");

  return (
    <div className="pad" style={{ paddingTop: 0 }}>
      <div className="topbar">
        <button className="iconbtn" onClick={onBack}>
          <ChevronLeft />
        </button>
        <h1 className="title" style={{ flex: 1 }}>
          Кабинет тренера
        </h1>
      </div>
      <p className="hz-intro">
        Для того, чтобы стать тренером Stop For Fit, пожалуйста, заполните информацию о себе. Вы
        получите уведомление, как только ваша заявка будет рассмотрена.
      </p>
      <h2 className="section">Личная информация</h2>
      <p className="field-label-standalone" style={{ marginTop: -14 }}>
        Информация, которая будет видна клиентам при выборе тренера
      </p>
      <div className="form-avatar-wrap">
        <div className="form-avatar">
          <UserIcon />
        </div>
      </div>
      <div className="form-field">
        <label>О себе</label>
        <textarea
          rows={4}
          value={about}
          onChange={(e) => setAbout(e.target.value)}
          placeholder="Квалификация, награды, личная информация"
        />
      </div>
      <p className="char-count">{about.length}/4096</p>
      <p className="field-label-standalone">Фотографии</p>
      <button className="iconbtn" style={{ width: 64, height: 64, borderRadius: 16, marginBottom: 16 }}>
        <CameraIcon />
      </button>
      <div className="form-field">
        <label>Стоимость тренировки</label>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <input placeholder="0" />
          <span className="unit">₽</span>
        </div>
      </div>
      <button className="cta">Отправить заявку</button>
    </div>
  );
}
