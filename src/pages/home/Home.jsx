import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Nav from "../../components/NavComponents/Nav";
import BtnComponent from "../../components/btnComponent/BtnComponent";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import userChecked from "../../content/userChecked.json";
import userRoles from "../../content/userRoles.json";
import "./Home.css";
import Checkbox from "./components/checkbox/Checkbox";
import UserRecapList from "./components/userRecapList/UserRecapList";
export default function Home() {
  const [step, setStep] = useState(1);

  return (
    <div className="homeContainer">
      <HeaderComponent>
        {(step == 1 || step == 2) && "Qui travaille aujourd’hui ?"}
        {step == 3 && "Récapitulatif  du service"}
      </HeaderComponent>
      <Nav step={step} setStep={setStep} />
      <div className="homeMain">
        {step == 1 &&
          userChecked.map((user, index) => {
            return <Checkbox key={index} name={user.name} index={index} />;
          })}
        {step == 2 &&
          userChecked.map((user, index) => {
            return <Checkbox key={index} name={user.name} index={index} />;
          })}
        {step == 3 &&
          userRoles.map((user, index) => {
            return (
              <UserRecapList key={index} name={user.name} role={user.role} />
            );
          })}
      </div>
      <BtnComponent
        title={step == 1 || step == 2 ? "Suivant" : "Commencer le service !"}
        icon={step == 1 || step == 2 ? <FaArrowRight /> : ""}
        setStep={setStep}
        step={step}
      />
    </div>
  );
}
