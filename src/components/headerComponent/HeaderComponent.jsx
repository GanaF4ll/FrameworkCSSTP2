import { DateTime } from "luxon";
import hamburgerIcon from "../../assets/icons/hamburgerIcon.svg";
import "./headerComponent.css";
export default function HeaderComponent({ children }) {
  const now = DateTime.now();
  const formattedDate = now.setLocale("fr").toFormat("cccc, d LLL");
  return (
    <div className="headerContainer">
      <h2>{formattedDate}</h2>
      <div>
        <h1>{children}</h1>
        <img src={hamburgerIcon} alt="hamburger icone" />
      </div>
    </div>
  );
}
