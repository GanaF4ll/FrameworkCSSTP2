import React, { useState, useRef, useEffect } from "react";
import "./Pourboire.css";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import Input from "../../components/input/Input";
import BtnNumber from "./components/BtnNumber";
import BtnPourboire from "./components/btnPourboire/BtnPourboire";

const Pourboire = () => {
  const [pourboire, setPourboire] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [step, setStep] = useState(1);
  const notificationTimeout = useRef(null);

  useEffect(() => {
    return () => {
      if (notificationTimeout.current) {
        clearTimeout(notificationTimeout.current);
      }
    };
  }, []);

  const handleBtnClick = (value) => {
    console.log(value);
    setPourboire(value);
  };

  const handleClick = () => {
    console.log("Button was clicked");
    setStep((prev) => (prev < 3 ? prev + 1 : prev));
    setShowNotification(true);

    if (notificationTimeout.current) {
      clearTimeout(notificationTimeout.current);
    }

    notificationTimeout.current = setTimeout(() => {
      setShowNotification(false);
      notificationTimeout.current = null;
    }, 2000);
  };

  return (
    <div className="pourboire-container">
      <HeaderComponent>
        Ajouter <br></br> un pourboire
      </HeaderComponent>
      <Input>Nom de table</Input>
      <Input value={pourboire} onChange={setPourboire}>
        Montant du pourboire
      </Input>
      <BtnNumber onBtnClick={handleBtnClick} />

      <BtnPourboire title="Ajouter le pourboire" onClick={handleClick} />
      {showNotification && <div className="notif flex"></div>}
    </div>
  );
};

export default Pourboire;
