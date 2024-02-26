import { FaArrowRight } from "react-icons/fa6";
import Nav from "../../components/NavComponents/Nav";
import BtnComponent from "../../components/btnComponent/BtnComponent";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import "./Home.css";
import Checkbox from "./components/Checkbox";
export default function Home() {
  return (
    <div className="homeContainer">
      <HeaderComponent>
        Qui travaille <br /> aujourd’hui ?
      </HeaderComponent>
      <Nav />
      <Checkbox />
      <BtnComponent title="Suivant" icon={<FaArrowRight />} />
    </div>
  );
}
