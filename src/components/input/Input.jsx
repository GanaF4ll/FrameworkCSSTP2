import React from "react";
import "./Input.css";
export default function Input({ children }) {
  return (
    <div className="input-container flex">
      <div>
        <label>{children}</label>
        <input className="input" type="text" />
      </div>
    </div>
  );
}
