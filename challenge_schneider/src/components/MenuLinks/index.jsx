import { Link } from "react-router-dom";

import { ReactComponent as HomeIcon } from "../../assets/icons/home.svg";
import { ReactComponent as InfoIcon } from "../../assets/icons/info.svg";
import { ReactComponent as StoreIcon } from "../../assets/icons/store.svg";
import { ReactComponent as TipsIcon } from "../../assets/icons/tips.svg";
import { ReactComponent as EcoIcon } from "../../assets/icons/eco.svg";
import { ReactComponent as EventIcon } from "../../assets/icons/event.svg";
import { ReactComponent as AvatarIcon } from "../../assets/icons/avatar-svgrepo-com.svg";

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
        <Link to="/home">
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
          Eu Sustentável
        </Link>
      </li>
      <li className="bm-item">
        <EventIcon
          height={28}
          width={28}
          fill={"#fff"}
          style={{ paddingLeft: "5px", marginBottom: "8px" }}
        />
        <Link to="/desafio-mes">
          Desafio do Mês 
        </Link>
      </li>
      <li className="bm-item">
        <AvatarIcon
          height={35}
          width={35}
          fill={"#fff"}
          style={{marginBottom: "2px" }}
        />
        <Link to="/avatar">
          Criação de Avatar 
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
          Sobre o Projeto
        </Link>
      </li>
      <li>
        <LogoutButton verifyLogout={verifyLogout} />
      </li>
    </ul>
  );
}
