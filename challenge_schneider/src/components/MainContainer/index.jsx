import styles from './MainContainer.module.css';
import BurgerMenu from '../BurgerMenu';
import SideBar from '../SideBar';
import { useEffect, useState } from 'react';

export default function MainContainer({ children, verifyLogout }) {
  const [windowSizeType, setWindowSizeType] = useState(0);
  const [scrollBackground, setScrollBackground] = useState(false);

  function handleResize() {
    if (window.innerWidth <= 765) {
      setWindowSizeType(1);
    } else {
      setWindowSizeType(0);
    }
  }

  function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > 0) {
      setScrollBackground(true);
    } else {
      setScrollBackground(false);
    }
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll); // Adiciona o evento de rolagem
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll); // Remove o evento de rolagem ao desmontar o componente
    };
  }, []);

  return (
    <main className={`${styles.main} ${scrollBackground ? styles.scrolled : ''}`}>
      {windowSizeType === 0 ? (
        <SideBar verifyLogout={verifyLogout} />
      ) : (
        <div className={styles.containerBurgerMenu}>
          <BurgerMenu verifyLogout={verifyLogout} />
        </div>
      )}
      <div className={styles.containerContent}></div>
      {children}
    </main>
  );
}
