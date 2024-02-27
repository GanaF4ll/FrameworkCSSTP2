import React from "react";

import { NavLink } from "react-router-dom";
import ToggleSwitchComponent from "../toggleSwitchComponent/ToggleSwitchComponent";
import "./btnComponent.css";
export default function BtnComponent({ title, icon, setStep, step }) {
  return (
    <div className="btnComponent">
      {step == 3 && <ToggleSwitchComponent />}
      {step == 3 ? (
        <NavLink to={"/pourboire"}>
          {title}
          {icon && icon}
        </NavLink>
      ) : (
        <button onClick={() => setStep((prev) => (prev < 3 ? prev + 1 : prev))}>
          {title}
          {icon && icon}
        </button>
      )}
    </div>
  );
}
