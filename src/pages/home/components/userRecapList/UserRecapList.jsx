import ionPeopleOutline from "../../../../assets/icons/ion_people-outline.png";
import "./userRecapList.css";
export default function UserRecapList({ name, role }) {
  return (
    <div className="userRecapListContainer">
      <div className="left">
        <div>
          <img src={ionPeopleOutline} alt="ionPeopleOutline" />
        </div>
      </div>
      <div className="main">
        <p>{name} </p>
      </div>
      <div className="right">
        <div>{role}</div>
      </div>
    </div>
  );
}
