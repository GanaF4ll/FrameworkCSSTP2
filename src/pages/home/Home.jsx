import { FaArrowRight } from "react-icons/fa6";
import Nav from "../../components/NavComponents/Nav";
import BtnComponent from "../../components/btnComponent/BtnComponent";
export default function Home() {
  return (
    <div className="homeContainer">
    <Nav />
      <BtnComponent title="Suivant" icon={<FaArrowRight />} />
  
    </div>
  );

}
