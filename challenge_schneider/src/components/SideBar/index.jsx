import styles from "./SideBar.module.css";
import MenuLinks from "../MenuLinks";


export default function SideBar({ verifyLogout }) {
  return (
    <section className={styles.sideBarContainer}>
      <MenuLinks verifyLogout={verifyLogout} />
      
    </section>
  );
}
