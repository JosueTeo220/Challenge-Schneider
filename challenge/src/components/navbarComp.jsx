import React from "react";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/navbar.css";
import hamburgerIcon from "../assets/icons/menu-hamburguer.png";


const NavigationBar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation" onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
      <a href="/" className="brand-name">
      SConnect
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <img src={hamburgerIcon} alt="Hamburger Menu" className="menu-icon"/>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavigationBar;
