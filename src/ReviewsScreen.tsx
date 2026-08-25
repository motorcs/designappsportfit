import { reviews } from "./data";
import { ChevronLeft, StarIcon } from "./icons";

export function ReviewsScreen({ onBack }: { onBack: () => void }) {
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
        <h1 style={{ flex: 1, textAlign: "center" }}>Отзывы</h1>
      </div>
      <div className="pad" style={{ paddingTop: 16 }}>
        {reviews.map((r, i) => (
          <div className="review-card" key={i}>
            <p className="review-place">{r.place}</p>
            <div className="review-stars">
              <span className="stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <StarIcon key={s} filled={s < r.stars} />
                ))}
              </span>
              <span className="date">{r.date}</span>
            </div>
            <p className="review-text">{r.text}</p>
            <div className="review-reply">
              <p className="r-title">Ответ</p>
              <p>{r.reply}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
