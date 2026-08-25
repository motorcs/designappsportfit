export function DeleteProfileModal({
  onConfirm,
  onCancel,
}: {
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <div className="modal-overlay">
      <div className="modal-card">
        <h3>Удалить профиль?</h3>
        <p className="also">Также будет:</p>
        <ul>
          <li>Удалена статистика по тренировкам</li>
          <li>Отменены запланированные тренировки</li>
          <li>Отменена подписка</li>
        </ul>
        <button className="modal-btn danger" onClick={onConfirm}>
          Подтвердить
        </button>
        <button className="modal-btn ghost" onClick={onCancel}>
          Отменить
        </button>
      </div>
    </div>
  );
}
