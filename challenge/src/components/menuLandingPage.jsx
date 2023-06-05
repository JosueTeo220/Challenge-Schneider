import React, { useState, useEffect } from "react";
import "../styles/menuLandingPage.css";

function MenuLandingPage() {
  const [showComponent, setShowComponent] = useState(true);
  const [scrolled, setScrolled] = useState(false);

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
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="MenuContainer">
      {showComponent ? (
        <nav>
          <ul className="listMenu">
          <li className="menuLink menuLinkBorder">
            <a href="/">Inicio</a>
          </li>
          <li className="menuLink menuLinkBorder">
            <a href="/">Dicas Sustentáveis</a>
          </li>
          <li className="menuLink menuLinkBorder">
            <a href="/">Gameficação</a>
          </li>
          <li className="menuLink menuLinkBorder">
            <a href="/">Sobre o Projeto</a>
          </li>
        </ul>
        </nav>
      ) : (
        <div>
          <p>Menu Hamburger</p>
        </div>
      )}
    </div>
  );
}

export default MenuLandingPage;
