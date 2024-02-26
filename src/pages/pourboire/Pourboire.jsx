import React from "react";
import "./Pourboire.css";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import Input from "../../components/input/Input";
import BtnNumber from "./components/BtnNumber";
const Pourboire = () => {
  return (
    <div className="pourboire-container">
      <HeaderComponent>
        Ajouter <br></br> un pourboire
      </HeaderComponent>
      <Input>Nom de table</Input>
      <Input>Montant du pourboire</Input>
      <BtnNumber />
    </div>
  );
};

export default Pourboire;
