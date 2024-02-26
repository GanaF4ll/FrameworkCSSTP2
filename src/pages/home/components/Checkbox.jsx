import React from "react";
import "./Checkbox.css";
import icone from "../../../assets/icons/icone.svg";

const Checkbox = () => {
  return (
    <div className="checkbox-container">
      <div className="left">
        <img src={icone} alt="icone" className="icone" />
      </div>
      <div className="main">TEST TEST</div>
      <div className="right">ZZ</div>
    </div>
  );
};

export default Checkbox;
