import "./Header.scss";
import headerlogo from "../../Assets/logo/logoinblue.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <Link to={"/"}>
        <img className="header__logo" src={headerlogo} />
      </Link>
      <div className="header__infowrapper">
        <FontAwesomeIcon className="header__icon"icon={faGear} />
        <FontAwesomeIcon className="header__icon"icon={faBullhorn} />
        <FontAwesomeIcon className="header__icon"icon={faUser} />
      </div>
    </div>
  );
}
export default Header;
