import "./btnComponent.css";
export default function BtnComponent({ title, icon, setStep }) {
  return (
    <div className="btnComponent">
      <button onClick={() => setStep((prev) => (prev < 3 ? prev + 1 : prev))}>
        {title}
        {icon && icon}
      </button>
    </div>
  );
}
