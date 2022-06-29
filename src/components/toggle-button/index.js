import "./style.scss";

export function ToggleButton({ onToggle }) {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" onClick={onToggle} />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default ToggleButton;
