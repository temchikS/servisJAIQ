import search from "../images/search.png";
import avatar from "../images/avatar.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-cont">
        <img src="" alt="LOGO" />
        <div className="nav">
          <Link className="link">Заказы</Link>
          <Link className="link">Контакты мастеров</Link>
          <Link className="link">О нас</Link>
          <Link className="link">Поддержка</Link>
        </div>
        <div className="search">
          <img src={search} alt="search" />
          <img src={avatar} alt="pfp" />
        </div>
      </div>
    </header>
  );
}
export default Header;
