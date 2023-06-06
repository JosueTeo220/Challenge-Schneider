import React, { useState, useEffect } from "react";
import "../styles/menuLandingPage.css";
import menuModalIcon from "../assets/icons/menu-modal.png"
import profile from "../assets/icons/profile-icon.png"
import MenuModal from "./menuModal";
import { BrowserRouter, Link } from "react-router-dom";

function MenuLandingPage({user, verifyLogout}) {
  const [showComponent, setShowComponent] = useState(true);
  
  function handleLogout(){
    verifyLogout()
  }


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
          <BrowserRouter>
          <ul className="listMenu">
            <li className="menuLink menuLinkBorder">
              <Link href="/">Inicio</Link>
            </li>
            <li className="menuLink menuLinkBorder">
              <Link href="/">Dicas Sustentáveis</Link>
            </li>
            <li className="menuLink menuLinkBorder">
              <Link href="/">Gameficação</Link>
            </li>
            <li className="menuLink menuLinkBorder">
              <Link href="/">Sobre o Projeto</Link>
            </li>
            <li className="menuLink menuLinkBorder">
              <img src={profile} alt="perfil" height={30} width={30} />
              <Link href="/" onClick={handleLogout}>Logout</Link>
            </li>
          </ul>
        </BrowserRouter>
        </nav>
      ) : (
        <div>
          <MenuModal>
            <img src={menuModalIcon} alt="Icone menu"/>
          </MenuModal>
        </div>
      )}
    </div>
  );
}

export default MenuLandingPage;
