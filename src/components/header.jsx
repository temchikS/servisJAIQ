import { useState } from "react";
import search from "../images/search.png";
import avatar from "../images/avatar.png";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header>
        <div className="header-cont">
          <button className="menu-btn" onClick={toggleMenu}>
            <div className="white-line"></div>
            <div className="white-line"></div>
            <div className="white-line"></div>
          </button>
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

      <div className={`side-menu ${menuOpen ? "open" : ""}`}>
        <span className="close-btn" onClick={closeMenu}>
          &times;
        </span>
        <Link className="link" onClick={closeMenu}>
          Заказы
        </Link>
        <Link to="/registration" className="link" onClick={closeMenu}>
          Контакты мастеров
        </Link>
        <Link to="/about-us" className="link" onClick={closeMenu}>
          О нас
        </Link>
        <Link to="/support" className="link" onClick={closeMenu}>
          Поддержка
        </Link>
      </div>

      {menuOpen && (
        <div className="menu-overlay active" onClick={closeMenu}></div>
      )}
    </>
  );
}

export default Header;
