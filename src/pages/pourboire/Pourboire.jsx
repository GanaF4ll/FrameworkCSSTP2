import React, { useState } from "react";
import "./Pourboire.css";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import Input from "../../components/input/Input";
import BtnNumber from "./components/BtnNumber";

const Pourboire = () => {
  const [pourboire, setPourboire] = useState("");

  const handleBtnClick = (value) => {
    console.log(value);
    setPourboire(value);
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
    </div>
  );
};
export default Pourboire;
