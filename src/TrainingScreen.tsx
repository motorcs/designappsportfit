import { useState } from "react";
import {
  HomeIcon,
  PlayIcon,
  DotsIcon,
  PlusCircleIcon,
  WrenchIcon,
  ClockIcon,
  HeartIcon,
  FlameIcon,
  PencilIcon,
  DownloadIcon,
  SaveIcon,
} from "./icons";
import { BodySilhouette } from "./BodySilhouette";
import { HomeSubscriptionModal } from "./HomeSubscriptionModal";

const tabs = ["Тренировка", "Рекорды", "Дневник", "Таймеры", "Упражнения"];

export function TrainingScreen({ onOpenSettings }: { onOpenSettings: () => void }) {
  const [tabIdx, setTabIdx] = useState(0);
  const [homeModalOpen, setHomeModalOpen] = useState(false);
  const [timerName, setTimerName] = useState("");
  const [trainingDiaryNote, setTrainingDiaryNote] = useState("");
  const isTimers = tabIdx === 3;

  return (
    <div style={{ padding: 0, position: "relative", minHeight: "100%" }}>
      <div className="topbar" style={{ padding: "14px 20px 10px" }}>
        <h1 className="title" style={{ flex: 1, fontSize: 15, whiteSpace: "nowrap" }}>
          {isTimers ? "Таймеры" : "Тренировка"}
        </h1>
        <div className="wk-top-icons">
          {isTimers ? (
            <>
              <button className="iconbtn">
                <PlusCircleIcon />
              </button>
              <button className="iconbtn">
                <WrenchIcon />
              </button>
            </>
          ) : (
            <>
              <button className="iconbtn" onClick={() => setHomeModalOpen(true)}>
                <HomeIcon />
              </button>
              <button className="iconbtn">
                <PlayIcon />
              </button>
              <button className="iconbtn" onClick={onOpenSettings}>
                <DotsIcon />
              </button>
            </>
          )}
        </div>
      </div>

      <div className="wk-tabs">
        {tabs.map((t, i) => (
          <button
            key={t}
            className={`wk-tab ${i === tabIdx ? "active" : ""}`}
            onClick={() => setTabIdx(i)}
          >
            {t}
          </button>
        ))}
      </div>

      {tabIdx === 0 && (
        <>
          <div className="wk-time">
            <ClockIcon /> Сегодня
          </div>
          <div className="pad" style={{ paddingTop: 16 }}>
            <div className="muscle-block">
              <BodySilhouette size={104} />
              <div style={{ flex: 1 }}>
                <p style={{ color: "var(--white)", fontSize: 14, fontWeight: 700, margin: "0 0 14px" }}>
                  Всё тело
                </p>
                <div className="hr-stats">
                  <div className="hr-row compact">
                    <span className="hr-label">
                      <HeartIcon /> ЧСС
                    </span>
                    <span className="hr-value">
                      0 уд/мин <span>0% макс</span>
                    </span>
                  </div>
                  <div className="hr-row compact">
                    <span className="hr-label">
                      <FlameIcon /> калории
                    </span>
                    <span className="hr-value">0 ккал</span>
                  </div>
                </div>
              </div>
            </div>
            <div
              style={{
                height: 1,
                borderTop: "1px dashed rgba(241,241,241,0.15)",
                marginTop: 24,
              }}
            />
          </div>
        </>
      )}

      {tabIdx === 1 && (
        <>
          <div className="wk-empty">
            <p>Нет рекордов</p>
          </div>
          <div className="pad" style={{ position: "absolute", left: 0, right: 0, bottom: 16 }}>
            <button className="cta" style={{ marginTop: 0 }}>
              Добавить рекорд
            </button>
          </div>
        </>
      )}

      {tabIdx === 2 && (
        <>
          <div className="diary-head">
            <span className="dt">Тип тренировки не указан</span>
            <div className="diary-icons">
              <PencilIcon />
              <DownloadIcon />
              <SaveIcon />
            </div>
          </div>
          <div className="pad" style={{ paddingTop: 0 }}>
            <p className="field-label-standalone">Заметка</p>
            <textarea
              className="diary-textarea"
              maxLength={2048}
              value={trainingDiaryNote}
              onChange={(e) => setTrainingDiaryNote(e.target.value)}
            />
            <p className="char-count">{trainingDiaryNote.length}/2048</p>
          </div>
        </>
      )}

      {tabIdx === 3 && (
        <div className="pad" style={{ paddingTop: 16 }}>
          <div className="timer-row">
            <input
              className="timer-name-input"
              placeholder="Название таймера"
              value={timerName}
              onChange={(e) => setTimerName(e.target.value)}
            />
            <button className="timer-add-btn">
              <PlusCircleIcon />
            </button>
            <button className="iconbtn">
              <DotsIcon />
            </button>
          </div>
        </div>
      )}

      {tabIdx === 4 && (
        <>
          <div className="wk-empty">
            <p>Упражнения ещё не добавлены</p>
          </div>
          <div className="pad" style={{ position: "absolute", left: 0, right: 0, bottom: 16 }}>
            <button className="cta" style={{ marginTop: 0 }}>
              Добавить упражнение
            </button>
          </div>
        </>
      )}

      {homeModalOpen && <HomeSubscriptionModal onClose={() => setHomeModalOpen(false)} />}
    </div>
  );
}
