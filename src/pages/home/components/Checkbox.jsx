import React from "react";
import "./Checkbox.css";
import icone from "../../../assets/icons/icone.svg";

const Checkbox = () => {
  return (
    <div className="checkbox-container">
      <div className="left flex justify-content-center">
        <img src={icone} alt="icone" className="icone" />
      </div>
      <div className="main flex justify-content-center">TEST TEST</div>
      <div className="right flex justify-content-center">
        <input type="checkbox" id="checkbox" className="checkbox" />
        <label htmlFor="checkbox"></label>
      </div>
    </div>
  );
};

export default Checkbox;
