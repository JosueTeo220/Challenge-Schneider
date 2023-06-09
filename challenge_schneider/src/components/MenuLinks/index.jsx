import { Link } from "react-router-dom";

import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as InfoIcon } from "../../assets/icons/info.svg";
import { ReactComponent as StoreIcon } from "../../assets/icons/store.svg";
import { ReactComponent as TipsIcon } from "../../assets/icons/tips.svg";
import { ReactComponent as EcoIcon } from "../../assets/icons/eco.svg";

import LogoutButton from "../SideBar/LogoutButton";
import styles from './MenuLinks.module.css'

export default function MenuLinks({ verifyLogout }) {
  return (
    <ul className={styles.iconPosition}>
      <li className="bm-item">
        <HomeIcon
          height={28}
          width={28}
          fill={"#fff"}
          style={{ paddingLeft: "5px", marginBottom: "8px" }}
        />
        <Link to="/">
          Inicio
        </Link>
      </li>
      <li className="bm-item">
        <StoreIcon
          height={28}
          width={28}
          fill={"#fff"}
          style={{ paddingLeft: "5px", marginBottom: "8px" }}
        />
        <Link to="/loja">
          Loja
        </Link>
      </li>
      <li className="bm-item">
        <TipsIcon
          height={28}
          width={28}
          fill={"#fff"}
          style={{ paddingLeft: "5px", marginBottom: "8px" }}
        />
        <Link to="/dicas">
          Dicas
        </Link>
      </li>
      <li className="bm-item">
        <EcoIcon
          height={28}
          width={28}
          fill={"#fff"}
          style={{ paddingLeft: "5px", marginBottom: "8px" }}
        />
        <Link to="/social">
          Social
        </Link>
      </li>
      <li className="bm-item">
        <InfoIcon
          height={28}
          width={28}
          fill={"#fff"}
          style={{ paddingLeft: "5px", marginBottom: "8px" }}
        />
        <Link to="/sobre">
          Sobre
        </Link>
      </li>
      <li>
        <LogoutButton verifyLogout={verifyLogout} />
      </li>
    </ul>
  );
}
