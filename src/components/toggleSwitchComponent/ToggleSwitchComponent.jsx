import "./toggleSwitchComponent.css";

export default function ToggleSwitchComponent() {
  return (
    <div className="toggleSwitchContainer">
      <p>Service</p>
      <label className="switch">
        <input type="checkbox" />
        <span className="slider round"></span>
      </label>
      <p>Midi</p>
    </div>
  );
}
