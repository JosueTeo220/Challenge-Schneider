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
          <button onClick={openCloseMenu}>
            {children}
          </button>
          <p>Outro local</p>
        </div>
      ) : (
        <div>
          <button onClick={openCloseMenu}>
            {children}
          </button>
        </div>
      )}
    </div>
  );
};
export default MenuHamburger;
