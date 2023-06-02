import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <Link to="/" className="navbrand">Logo</Link>
        <ul className="navlinks">
          <li className="navlink">
            <Link to="/dicas-sustentaveis">Dicas Sustentáveis</Link>
          </li>
          <li className="navlink">
            <Link to="/noticias-esg">Notícias ESG</Link>
          </li>
          <li className="navlink">
            <Link to="/fale-conosco">Fale Conosco</Link>
          </li>
          <li className="navlink">
            <Link to="/sobre-nos">Sobre Nós</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
