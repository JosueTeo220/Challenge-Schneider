import styles from './MainContainer.module.css'
import BurgerMenu from '../BurgerMenu';


export default function MainContainer({children, verifyLogout}){
    return (
        <main className={styles.main}>
            {/* <SideBar verifyLogout={verifyLogout} /> */}
            <BurgerMenu verifyLogout={verifyLogout} />
            {children}
        </main>
    )
}