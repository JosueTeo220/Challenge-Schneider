import styles from './MainContainer.module.css'
import SideBar from '../SideBar'

export default function MainContainer({children, verifyLogout}){
    return (
        <main className={styles.main}>
            <SideBar verifyLogout={verifyLogout} />
            {children}
        </main>
    )
}