import { FaArrowRight } from "react-icons/fa6";
import BtnComponent from "../../components/btnComponent/BtnComponent";
import HeaderComponent from "../../components/headerComponent/HeaderComponent";
import "./Home.css";
export default function Home() {
  return (
    <div className="homeContainer">
      <HeaderComponent>
        Qui travaille <br /> aujourd’hui ?
      </HeaderComponent>
      <BtnComponent title="Suivant" icon={<FaArrowRight />} />
    </div>
  );
}
