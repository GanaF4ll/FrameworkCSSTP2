import { DateTime } from "luxon";
import { useDispatch } from "react-redux";
import hamburgerIcon from "../../assets/icons/hamburgerIcon.svg";
import { setIsDrawerReducer } from "../../redux/reducers/drawerReducer";
import "./headerComponent.css";
export default function HeaderComponent({ children }) {
  const now = DateTime.now();
  const dispatch = useDispatch();
  const formattedDate = now.setLocale("fr").toFormat("cccc, d LLL");
  const handleBurgerIcon = () => {
    dispatch(setIsDrawerReducer(true));
  };
  return (
    <div className="headerContainer">
      <h2>{formattedDate}</h2>
      <div>
        <h1>{children}</h1>
        <img
          src={hamburgerIcon}
          alt="hamburger icone"
          onClick={() => handleBurgerIcon()}
        />
      </div>
    </div>
  );
}
