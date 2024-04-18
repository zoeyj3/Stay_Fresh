import "./MenuList.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { faBoxesPacking } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import fridgeicon from "../../Assets/icons/refrigerator.svg";

function MenuList() {
  return (
    <div className="menulist">
      <a href="http://localhost:3000" className="menulist__item">
        <FontAwesomeIcon className="menulist__icon" icon={faHouse} /> Home
      </a>
      <a
        href="http://localhost:3000/myfridge/fridge"
        className="menulist__item"
      >
        <img className="menulist__icon-img" src={fridgeicon} /> Fridge
      </a>
      <a
        href="http://localhost:3000/myfridge/freezer"
        className="menulist__item"
      >
        <FontAwesomeIcon className="menulist__icon" icon={faSnowflake} />
        Freezer
      </a>
      <a
        href="http://localhost:3000/myfridge/pantry"
        className="menulist__item"
      >
        <FontAwesomeIcon className="menulist__icon" icon={faBoxesPacking} />
        Pantry
      </a>

      <hr className="menulist__hr" />
      <a
        href="https://www.linkedin.com/in/zixuan-jiang/"
        className="menulist__item"
      >
        <FontAwesomeIcon icon={faEnvelope} className="menulist__icon" />
        About Me
      </a>
    </div>
  );
}
export default MenuList;
