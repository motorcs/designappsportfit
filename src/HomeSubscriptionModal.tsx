export function HomeSubscriptionModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="modal-overlay">
      <div className="modal-card" style={{ textAlign: "center" }}>
        <p style={{ color: "var(--white)", fontSize: 14, lineHeight: 1.5, margin: "4px 0 20px" }}>
          Чтобы иметь возможность проводить домашние тренировки купите подписку на любую студию
        </p>
        <button className="modal-btn outline" onClick={onClose}>
          Закрыть
        </button>
      </div>
    </div>
  );
}
