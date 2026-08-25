export function Toggle({ on, onClick }: { on: boolean; onClick: () => void }) {
  return (
    <button className={`toggle ${on ? "on" : ""}`} onClick={onClick}>
      <div className="toggle-thumb" />
    </button>
  );
}
