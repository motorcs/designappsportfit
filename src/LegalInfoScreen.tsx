import { legalItems } from "./data";
import { ChevronLeft, ChevronRight } from "./icons";

export function LegalInfoScreen({ onBack }: { onBack: () => void }) {
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
        <h1 style={{ flex: 1, textAlign: "center" }}>Правовая информация</h1>
      </div>
      <div className="hist-list" style={{ paddingTop: 16 }}>
        {legalItems.map((l) => (
          <button
            key={l}
            className="faq-item"
            style={{
              borderRadius: 16,
              border: "1px solid rgba(241,241,241,0.07)",
              background: "rgba(241,241,241,0.03)",
              marginBottom: 8,
              padding: 16,
            }}
          >
            {l}
            <ChevronRight />
          </button>
        ))}
      </div>
    </>
  );
}
