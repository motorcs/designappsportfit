import { useState } from "react";
import { dates, times, halls, trainingTypeOptions } from "./data";
import { ChevronLeft, ChevronRight, StarIcon, UserIcon, HandIcon } from "./icons";

export function BookingScreen({
  onBack,
  onContinue,
}: {
  onBack: () => void;
  onContinue: () => void;
}) {
  const [dateIdx, setDateIdx] = useState(0);
  const [timeIdx, setTimeIdx] = useState(5);
  const [hallIdx, setHallIdx] = useState(0);
  const [withTrainer, setWithTrainer] = useState(false);
  const [trainingTypeIdx, setTrainingTypeIdx] = useState(0);
  const [trainingTypeOpen, setTrainingTypeOpen] = useState(false);

  return (
    <div className="pad">
      <div className="topbar">
        <button className="iconbtn" onClick={onBack}>
          <ChevronLeft />
        </button>
        <h1 className="title">Запись на тренировку</h1>
      </div>

      <div className="card">
        <div className="logo-badge">
          <HandIcon />
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <p className="studio-name">Stop For Fit — Путилково</p>
          <div className="studio-rating">
            <StarIcon filled />
            <span>4.9 · (860 отзывов)</span>
          </div>
        </div>
      </div>

      <div className="section">
        <h2 className="section">Выберите зал</h2>
        <div className="capsule-list">
          {halls.map((h, i) => (
            <button
              key={h.id}
              className={`capsule-item ${i === hallIdx ? "active" : ""}`}
              onClick={() => setHallIdx(i)}
            >
              <div className="capsule-icon">
                <HandIcon />
              </div>
              <div>
                <p className="name">{h.name}</p>
                <p className="meta">
                  {h.size} · {h.equipment}
                </p>
              </div>
              <div className="radio">
                <div className="radio-dot" />
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section">Выберите дату</h2>
        <div className="date-scroll">
          {dates.map((d, i) => (
            <button
              key={d.day}
              className={`date-pill ${i === dateIdx ? "active" : ""}`}
              onClick={() => setDateIdx(i)}
            >
              <div className="dd">{d.day}</div>
              <div className="mm">Авг</div>
              <div className="wd">{d.weekday}</div>
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section">Выберите время</h2>
        <div className="time-grid">
          {times.map((t, i) => (
            <button
              key={t}
              className={`time-pill ${i === timeIdx ? "active" : ""}`}
              onClick={() => setTimeIdx(i)}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="section">
        <h2 className="section">Тренер</h2>
        <div className="trainer-row">
          <button
            className={`trainer-opt ${!withTrainer ? "active" : ""}`}
            onClick={() => setWithTrainer(false)}
          >
            <div className="avatar">
              <UserIcon />
            </div>
            <div>
              <p>Самостоятельно</p>
              <p>Без тренера</p>
            </div>
          </button>
          <button
            className={`trainer-opt ${withTrainer ? "active" : ""}`}
            onClick={() => setWithTrainer(true)}
          >
            <div className="avatar">
              <ChevronRight />
            </div>
            <div>
              <p>С тренером</p>
              <p>Выбрать профи</p>
            </div>
          </button>
        </div>
      </div>

      <div className="section">
        <h2 className="section">Тип тренировки</h2>
        <button className="type-select" onClick={() => setTrainingTypeOpen((o) => !o)}>
          <span>{trainingTypeOptions[trainingTypeIdx]}</span>
          <svg
            className={`type-select-chev ${trainingTypeOpen ? "open" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M6 9l6 6 6-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {trainingTypeOpen && (
          <div className="capsule-list" style={{ marginTop: 8 }}>
            {trainingTypeOptions.map((t, i) => (
              <button
                key={t}
                className={`type-option ${i === trainingTypeIdx ? "active" : ""}`}
                onClick={() => {
                  setTrainingTypeIdx(i);
                  setTrainingTypeOpen(false);
                }}
              >
                <span>{t}</span>
                <div className="radio">
                  <div className="radio-dot" />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      <button className="cta" onClick={onContinue}>
        Продолжить
      </button>
    </div>
  );
}
