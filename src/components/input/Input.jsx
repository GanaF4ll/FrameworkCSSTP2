import React from "react";
import "./Input.css";
export default function Input({ children, value, onChange }) {
  return (
    <div className="input-container flex">
      <div>
        <label>{children}</label>
        <input
          className="input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
}
