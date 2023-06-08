import { useEffect, useState } from "react";
export function useResizeHandler() {
    const [showComponent, setShowComponent] = useState(true);
    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth <= 780) {
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
  
    return showComponent;
  }
  