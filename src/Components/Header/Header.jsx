import "./Header.scss";
import headerlogo from '../../Assets/logo/logoinblue.png'

function Header() {

  return (
    
    <div className="header">
      <img className="header__logo"src={headerlogo}/>
    </div>
  );
}
export default Header;
