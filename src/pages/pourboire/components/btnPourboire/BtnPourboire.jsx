import React, { useState } from "react";
import "../../../../components/btnComponent/btnComponent.css";

export default function BtnPourboire({ title, icon }) {
  const [step, setStep] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  const handleClick = () => {
    setStep((prev) => (prev < 3 ? prev + 1 : prev));
    setShowNotification(true);
  };

  return (
    <div className="btnComponent">
      {showNotification && (
        <div className="notif">Le pourboire a bien été ajouté ✔</div>
      )}{" "}
      <button onClick={handleClick}>
        {title}
        {icon && icon}
      </button>
    </div>
  );
}
