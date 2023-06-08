import { Link } from "react-router-dom";
import styles from './SideBar.module.css'

export default function SideBar() {
  return (
    <section className={styles.sideBarContainer}>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/about">Sobre</Link>
        </li>
      </ul>
    </section>
  );
}
