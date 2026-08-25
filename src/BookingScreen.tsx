import { useState } from "react";
import { dates, times, halls, trainingTypeOptions, equipment, studioPhotos, studioReviews } from "./data";
import {
  ChevronLeft,
  ChevronRight,
  StarIcon,
  UserIcon,
  HandIcon,
  CameraIcon,
  ScaleIcon,
  TreadmillIcon,
  SmithIcon,
  BenchIcon,
  BarbellZIcon,
  DumbbellPairIcon,
  BarbellShortIcon,
  ExpanderIcon,
  MultiGymIcon,
  MatIcon,
} from "./icons";

const equipmentIcons: Record<string, typeof ScaleIcon> = {
  scale: ScaleIcon,
  treadmill: TreadmillIcon,
  smith: SmithIcon,
  bench: BenchIcon,
  barbellZ: BarbellZIcon,
  dumbbellPair: DumbbellPairIcon,
  barbellShort: BarbellShortIcon,
  expander: ExpanderIcon,
  multiGym: MultiGymIcon,
  mat: MatIcon,
};

const bookingTabs = [
  { id: "record", label: "Запись" },
  { id: "equipment", label: "Оснащение" },
  { id: "photos", label: "Фото" },
  { id: "reviews", label: "Отзывы" },
] as const;

type BookingTab = (typeof bookingTabs)[number]["id"];

function Stars({ count }: { count: number }) {
  return (
    <span className="stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <StarIcon key={i} filled={i < count} />
      ))}
    </span>
  );
}

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
  const [bookingTab, setBookingTab] = useState<BookingTab>("record");

  return (
    <>
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
    </div>

    <div className="studio-tabs">
      {bookingTabs.map((t) => (
        <button
          key={t.id}
          className={`studio-tab ${bookingTab === t.id ? "active" : ""}`}
          onClick={() => setBookingTab(t.id)}
        >
          {t.label}
        </button>
      ))}
    </div>

    <div className="pad">
      {bookingTab === "record" && (
        <>
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
        </>
      )}

      {bookingTab === "equipment" && (
        <>
          <h2 className="section">Оснащение</h2>
          <div className="eq-list">
            {equipment.map((e, i) => {
              const Icon = equipmentIcons[e.icon];
              return (
                <div className="eq-row" key={i}>
                  <div className="eq-icon">
                    <Icon />
                  </div>
                  <p>{e.label}</p>
                </div>
              );
            })}
          </div>
          <p className="eq-extra-title">Дополнительно</p>
          <p className="eq-extra">
            {`Ваше индивидуальное фитнес-пространство.
Бесключевой доступ через приложение.
Длительность тренировки — 60 минут.
Прослушивание любимой музыки через smart-колонку.
Экраны — информация о ходе вашей тренировки всегда на виду.
Тревожная кнопка — делает процесс тренировки ещё более безопасным.
Возможность подключить пульсометр для более детальной аналитики и участия в рейтинге прямо в приложении.

Stop For Fit — это не просто фитнес-клуб. Это место, где вы можете быть собой, сосредоточиться на своих целях и получать удовольствие от тренировок. Наша миссия — помочь вам достичь жизненных целей благодаря энергии, которую вы получаете от физических занятий.`}
          </p>
        </>
      )}

      {bookingTab === "photos" && (
        <>
          <h2 className="section">Фото</h2>
          <div className="photo-grid">
            {studioPhotos.map((p, i) => (
              <div className="photo-tile" style={{ background: p.tint }} key={i}>
                <CameraIcon />
                <span>{p.label}</span>
              </div>
            ))}
          </div>
        </>
      )}

      {bookingTab === "reviews" && (
        <>
          <h2 className="section">Отзывы</h2>
          {studioReviews.map((r, i) => (
            <div className="studio-review-card" key={i}>
              <p className="studio-review-name">{r.name}</p>
              <div className="review-stars">
                <Stars count={r.stars} />
                <span className="date">{r.date}</span>
              </div>
              {r.text && <p className="review-text">{r.text}</p>}
              <div className="review-reply">
                <p className="r-title">Ответ</p>
                <p>{r.reply}</p>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
    </>
  );
}
