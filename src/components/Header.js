import React from "react";
import "./Header.css";
import logo from "../assets/tesla-logo-red.png";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={logo} alt="Tesla Logo" className="logo" />
      </div>

      <div className="header__center">
        <a href="#1">Roadster</a>
        <a href="#2">Model S</a>
        <a href="#3">Model 3</a>
        <a href="#4">Model X</a>
        <a href="#5">Model Y</a>
        <a href="#6">Solar Roof</a>
        <a href="#7">Solar Panel</a>
        <a href="#8">Accessories</a>
      </div>

      <div className="header__right">
        <p>Shop</p>
        <p>Tesla Account</p>
      </div>
    </div>
  );
}

export default Header;
