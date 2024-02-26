import ToggleSwitchComponent from "../toggleSwitchComponent/ToggleSwitchComponent";
import "./btnComponent.css";
export default function BtnComponent({ title, icon, setStep, step }) {
  return (
    <div className="btnComponent">
      {step == 3 && <ToggleSwitchComponent />}
      <button onClick={() => setStep((prev) => (prev < 3 ? prev + 1 : prev))}>
        {title}
        {icon && icon}
      </button>
    </div>
  );
}
