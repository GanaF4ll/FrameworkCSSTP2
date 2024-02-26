import React from "react";
import "./btnNumber.css";

const BtnNumber = () => {
  return (
    <div className="big-container flex justify-content-center">
      <div className="btn-container">
        <button className="btn-number">0.50</button>
      </div>
      <div className="btn-container">
        <button className="btn-number">1.00</button>
      </div>
      <div className="btn-container">
        <button className="btn-number">2.00</button>
      </div>
    </div>
  );
};

export default BtnNumber;
