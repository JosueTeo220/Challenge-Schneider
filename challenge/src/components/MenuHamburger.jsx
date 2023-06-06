import { BrowserRouter, Link, useEffect } from "react-router-dom";
import "../styles/menuHamburger.css";
import React, { useState } from "react";
const MenuHamburger = ({ children }) => {
  const [menuClick, setMenuClick] = useState(false);
  function openCloseMenu (){
    setMenuClick(!menuClick);
  };
  return (
    <div>
      {menuClick ? (
        <div className="" onClick={openCloseMenu}>
            {children}
          <div className="responsiveLinks">Ola</div>
        </div>
      ) : (
        <div>
          <a onClick={openCloseMenu}>
            {children}
          </a>
        </div>
      )}
    </div>
  );
};
export default MenuHamburger;