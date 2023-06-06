import React, { useState, useEffect } from "react";
import "../styles/menuLandingPage.css";
import menuHamburgerIcon from "../assets/icons/menu-hamburguer.png"
import MenuHamburger from "./menuHamburger";
import { Link } from "react-router-dom";

function MenuLandingPage() {
  const [showComponent, setShowComponent] = useState(true);
  

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 765) {
        setShowComponent(false);
      } else {
        setShowComponent(true);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Verificar a largura da tela ao carregar a página

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  

  return (
    <div className="MenuContainer">
      {showComponent ? (
        <nav>
          <ul className="listMenu">
          <li className="menuLink menuLinkBorder">
            <Link>Inicio</Link>
          </li>
          <li className="menuLink menuLinkBorder">
            <Link>Dicas Sustentáveis</Link>
          </li>
          <li className="menuLink menuLinkBorder">
            <Link>Gameficação</Link>
          </li>
          <li className="menuLink menuLinkBorder">
            <Link>Sobre o Projeto</Link>
          </li>
        </ul>
        </nav>
      ) : (
        <div>
          <MenuHamburger>
            <img src={menuHamburgerIcon} alt="Icone menu"/>
          </MenuHamburger>
        </div>
      )}
    </div>
  );
}

export default MenuLandingPage;
