import { FaArrowRight } from "react-icons/fa6";
import BtnComponent from "../../components/btnComponent/BtnComponent";
export default function Home() {
  return (
    <div className="homeContainer">
      <BtnComponent title="Suivant" icon={<FaArrowRight />} />
    </div>
  );
}
