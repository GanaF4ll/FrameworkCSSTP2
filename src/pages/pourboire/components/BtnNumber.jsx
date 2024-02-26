import React from "react";
import "./btnNumber.css";

const BtnNumber = ({ onBtnClick }) => {
  return (
    <div className="big-container flex justify-content-center">
      <div className="btn-container">
        <button className="btn-number" onClick={() => onBtnClick("0.50")}>
          0.50
        </button>
      </div>
      <div className="btn-container">
        <button className="btn-number" onClick={() => onBtnClick("1.00")}>
          1.00
        </button>
      </div>
      <div className="btn-container">
        <button className="btn-number" onClick={() => onBtnClick("2.00")}>
          2.00
        </button>
      </div>
    </div>
  );
};

export default BtnNumber;
