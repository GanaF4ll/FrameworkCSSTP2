import icone from "../../../../assets/icons/icone.svg";
import "./Checkbox.css";

const Checkbox = ({ name, index }) => {
  return (
    <div className="checkbox-container">
      <div className="left flex justify-content-center">
        <img src={icone} alt="icone" className="icone" />
      </div>
      <div className="main flex justify-content-center">{name}</div>
      <div className="right flex justify-content-center">
        <input type="checkbox" id={index} className="checkbox" />
        <label htmlFor={index}></label>
      </div>
    </div>
  );
};

export default Checkbox;
