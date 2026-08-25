import { useState } from "react";
import { history } from "./data";
import { ChevronLeft, ShareIcon, ClockIcon, HeartIcon, FlameIcon, PencilIcon, DownloadIcon, SaveIcon } from "./icons";
import { BodySilhouette } from "./BodySilhouette";

const wkTabs = ["Тренировка", "Рекорды", "Дневник", "Упражнения"];

export function WorkoutScreen({
  historyIdx,
  onBack,
}: {
  historyIdx: number;
  onBack: () => void;
}) {
  const [tabIdx, setTabIdx] = useState(0);
  const [diaryNote, setDiaryNote] = useState("");
  const w = history[historyIdx];

  return (
    <div style={{ padding: 0, position: "relative", minHeight: "100%" }}>
      <div className="topbar" style={{ padding: "14px 20px 10px" }}>
        <button className="iconbtn" onClick={onBack}>
          <ChevronLeft />
        </button>
        <h1 className="title" style={{ flex: 1, fontSize: 15, whiteSpace: "nowrap" }}>
          Информация о записи
        </h1>
        <div className="wk-top-icons">
          <button className="iconbtn">
            <ShareIcon />
          </button>
        </div>
      </div>

      <div className="wk-tabs">
        {wkTabs.map((t, i) => (
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
            <ClockIcon />
            {w.weekday}, {w.day} августа 2026 г., {w.timeStart} – {w.timeEnd}
          </div>
          <div className="pad" style={{ paddingTop: 16 }}>
            <div className="muscle-block">
              <BodySilhouette size={104} />
              <div style={{ flex: 1 }}>
                <p style={{ color: "var(--white)", fontSize: 14, fontWeight: 700, margin: "0 0 14px" }}>
                  {w.type}
                </p>
                <div className="hr-stats">
                  <div className="hr-row compact">
                    <span className="hr-label">
                      <HeartIcon /> средняя ЧСС
                    </span>
                    <span className="hr-value">
                      {w.hrAvg} уд/мин <span>{w.hrAvgPct}% макс</span>
                    </span>
                  </div>
                  <div className="hr-row compact">
                    <span className="hr-label">
                      <HeartIcon /> макс ЧСС
                    </span>
                    <span className="hr-value">
                      {w.hrMax} уд/мин <span>{w.hrMaxPct}% макс</span>
                    </span>
                  </div>
                  <div className="hr-row compact">
                    <span className="hr-label">
                      <HeartIcon /> мин ЧСС
                    </span>
                    <span className="hr-value">
                      {w.hrMin} уд/мин <span>{w.hrMinPct}% макс</span>
                    </span>
                  </div>
                  <div className="hr-row compact">
                    <span className="hr-label">
                      <FlameIcon /> калории
                    </span>
                    <span className="hr-value">{w.calories} ккал</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {tabIdx === 1 && (
        <>
          <div className="wk-empty">
            <p>Нет рекордов для этой записи</p>
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
            <span className="dt">{w.type === "Всё тело" ? "Тип тренировки не указан" : w.type}</span>
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
              value={diaryNote}
              onChange={(e) => setDiaryNote(e.target.value)}
            />
            <p className="char-count">{diaryNote.length}/2048</p>
          </div>
        </>
      )}

      {tabIdx === 3 && (
        <>
          <div className="wk-empty">
            <p>Упражнения для этой записи ещё не добавлены</p>
          </div>
          <div className="pad" style={{ position: "absolute", left: 0, right: 0, bottom: 16 }}>
            <button className="cta" style={{ marginTop: 0 }}>
              Добавить упражнение
            </button>
          </div>
        </>
      )}
    </div>
  );
}
