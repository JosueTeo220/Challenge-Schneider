import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";
import styles from "./SideBar.module.css";
import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as InfoIcon } from "../../assets/icons/info.svg";
import { ReactComponent as StoreIcon } from "../../assets/icons/store.svg";
import { ReactComponent as TipsIcon } from "../../assets/icons/tips.svg";
import { ReactComponent as EcoIcon } from "../../assets/icons/eco.svg";

export default function SideBar({ verifyLogout }) {
  return (
    <section className={styles.sideBarContainer}>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
          <HomeIcon
            height={28}
            width={28}
            fill={"#fff"}
            style={{ paddingLeft: "5px", marginBottom: "8px" }}
          />
        </li>
        <li>
          <Link to="/loja">Loja</Link>
          <StoreIcon
            height={28}
            width={28}
            fill={"#fff"}
            style={{ paddingLeft: "5px", marginBottom: "8px" }}
          />
        </li>
        <li>
          <Link to="/dicas">Dicas</Link>
          <TipsIcon
            height={28}
            width={28}
            fill={"#fff"}
            style={{ paddingLeft: "5px", marginBottom: "8px" }}
          />
        </li>
        <li>
          <Link to="/social">Social</Link>
          <EcoIcon
            height={28}
            width={28}
            fill={"#fff"}
            style={{ paddingLeft: "5px", marginBottom: "8px" }}
          />
        </li>
        <li>
          <Link to="/sobre">Sobre</Link>
          <InfoIcon
            height={28}
            width={28}
            fill={"#fff"}
            style={{ paddingLeft: "5px", marginBottom: "8px"}}
          />
        </li>
        <li>
          <LogoutButton verifyLogout={verifyLogout} />
        </li>
      </ul>
    </section>
  );
}
