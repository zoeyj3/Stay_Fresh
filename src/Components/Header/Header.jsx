import "./Header.scss";
import headerlogo from '../../Assets/logo/logoinblue.png'
import { Link } from "react-router-dom";
function Header() {

  return (
    
    <div className="header">
      <Link to={"/"}>
      <img className="header__logo"src={headerlogo}/>
      </Link>
    </div>
  );
}
export default Header;
