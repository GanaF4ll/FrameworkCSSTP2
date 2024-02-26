import React, { useState } from "react";
import "./Nav.css";

function Nav() {
  const [selected, setSelected] = useState("salle");

  return (
    <div className="navbar flex justify-content-center">
      <button
        className={`btn-nav ${selected === "salle" ? "selected" : ""}`}
        onClick={() => setSelected("salle")}
      >
        Salle
      </button>
      <button
        className={`btn-nav ${selected === "cuisine" ? "selected" : ""}`}
        onClick={() => setSelected("cuisine")}
      >
        Cuisine
      </button>
      <button
        className={`btn-nav ${selected === "service" ? "selected" : ""}`}
        onClick={() => setSelected("service")}
      >
        Service
      </button>
    </div>
  );
}

export default Nav;
