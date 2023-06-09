import styles from './MainContainer.module.css'

export default function MainContainer({children}){
    return (
        <main className={styles.main}>
            {children}
        </main>
    )
}