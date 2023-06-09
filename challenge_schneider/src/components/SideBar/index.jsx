import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton"
import styles from './SideBar.module.css'

export default function SideBar({ verifyLogout }) {
  return (
    <section className={styles.sideBarContainer}>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
        </li>
        <li>
          <Link to="/loja">Loja</Link>
        </li>
        <li>
          <LogoutButton verifyLogout={verifyLogout} />
        </li>
      </ul>
    </section>
  );
}
