import React from "react";

import "./Nav.css";

function Nav({ step, setStep }) {
  return (
    <div className="navbar flex justify-content-center">
      <button
        className={`btn-nav ${step === 1 ? "selected" : ""}`}
        onClick={() => setStep(1)}
      >
        Salle
      </button>
      <button
        className={`btn-nav ${step === 2 ? "selected" : ""}`}
        onClick={() => setStep(2)}
      >
        Cuisine
      </button>
      <button
        className={`btn-nav ${step === 3 ? "selected" : ""}`}
        onClick={() => setStep(3)}
      >
        Service
      </button>
    </div>
  );
}

export default Nav;
