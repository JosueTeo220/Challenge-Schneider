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
        <div>
          <a href="#" onClick={openCloseMenu}>
            {children}
          </a>
          <p>Outro local</p>
        </div>
      ) : (
        <div>
          <a href="#" onClick={openCloseMenu}>
            {children}
          </a>
        </div>
      )}
    </div>
  );
};
export default MenuHamburger;
