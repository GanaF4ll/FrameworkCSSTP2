import React, { useState } from "react";
import "./Pourboire.css";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import BtnComponent from "../../components/btnComponent/BtnComponent";
import Input from "../../components/input/Input";
import BtnNumber from "./components/BtnNumber";
import BtnPourboire from "./components/btnPourboire/BtnPourboire";

const Pourboire = () => {
  const [pourboire, setPourboire] = useState("");
  const [showNotification, setShowNotification] = useState(false);
  const [step, setStep] = useState(1);

  const handleBtnClick = (value) => {
    console.log(value);
    setPourboire(value);
  };

  const handleNotificationClick = () => {
    setShowNotification(true);
  };

  const handleClick = () => {
    console.log("Button was clicked"); // Add console.log here
    setStep((prev) => (prev < 3 ? prev + 1 : prev));
    setShowNotification(true);
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
      {showNotification && (
        <div className="notif flex">Le pourboire a bien été ajouté</div>
      )}
    </div>
  );
};

export default Pourboire;
