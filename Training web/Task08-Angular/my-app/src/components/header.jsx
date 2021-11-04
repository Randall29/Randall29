import React from "react";
import logo from "../assets/logo.png";

function Header(props) {
  return (
    <div className="header">
      <img src={logo} className="header__nav-logo" alt="logo companie" />
      <div className="nav">
        <label htmlFor="menu-btn" className="nav__hamgurguer-logo">
          <i className="icon-hambuguer"></i>
        </label>
        <input className="header__menu-btn" type="checkbox" id="menu-btn" />
        <div className="header__menu-options">
          <a href="/#"><p>Directorio de Agentes</p></a>
          <a href="/#"><p>Contacto</p></a>
          <a href="/#"><span>Ingresar</span></a>
        </div>
      </div>
    </div>
  );
}

export default Header;
