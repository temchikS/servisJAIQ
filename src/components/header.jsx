import search from "../images/search.png";
import avatar from "../images/avatar.png";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-cont">
        <Link to="/" className="link">
          <img src="" alt="LOGO" />
        </Link>
        <div className="nav">
          <Link className="link">Заказы</Link>
          <Link to="/registration" className="link">
            Контакты мастеров
          </Link>
          <Link to="/about-us" className="link">
            О нас
          </Link>
          <Link to="/support" className="link">
            Поддержка
          </Link>
        </div>
        <div className="search-header">
          <img src={search} alt="search" />
          <img src={avatar} alt="pfp" />
        </div>
      </div>
    </header>
  );
}
export default Header;
