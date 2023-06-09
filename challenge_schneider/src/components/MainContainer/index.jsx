import styles from './MainContainer.module.css'
import BurgerMenu from '../BurgerMenu';
import SideBar from '../SideBar'
import { useEffect, useState } from 'react';


export default function MainContainer({children, verifyLogout}){

    const [windowSizeType, setWindowSizeType] = useState(0)

    function handleResize(){
        if(window.innerWidth <= 765 ){
            setWindowSizeType(1)
        } else {
            setWindowSizeType(0)
        }
    }

    useEffect(() => {
      handleResize()
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }, [])


    return (
        <main className={styles.main}>
            { windowSizeType === 0 
            ?
              <SideBar verifyLogout={verifyLogout} />
            :
            <div className={styles.containerBurgerMenu}>
              <BurgerMenu verifyLogout={verifyLogout} />
            </div>
              
            }
            <div className={styles.containerContent}></div>
            {children}
        </main>
    )
}