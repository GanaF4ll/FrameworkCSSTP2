import { useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Nav from "../../components/NavComponents/Nav";
import BtnComponent from "../../components/btnComponent/BtnComponent";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import userRoles from "../../content/userRoles.json";
import "./Home.css";
import Checkbox from "./components/Checkbox";
import UserRecapList from "./components/userRecapList/UserRecapList";
export default function Home() {
  const [step, setStep] = useState(1);
  return (
    <div className="homeContainer">
      <HeaderComponent>
        Qui travaille <br /> aujourd’hui ?
      </HeaderComponent>
      <Nav step={step} setStep={setStep} />
      <div className="homeMain">
        {userRoles.map((user, index) => {
          return (
            <UserRecapList key={index} name={user.name} role={user.role} />
          );
        })}
      </div>
      <BtnComponent title="Suivant" icon={<FaArrowRight />} />
    </div>
  );
}
