import "./btnComponent.css";
export default function BtnComponent({ title, icon }) {
  return (
    <div className="btnComponent">
      <button>
        {title}
        {icon && icon}
      </button>
    </div>
  );
}
