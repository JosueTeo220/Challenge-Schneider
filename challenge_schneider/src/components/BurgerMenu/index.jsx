import { push as Menu } from "react-burger-menu";
import "./BurgerMenu.css";
import MenuLinks from "../MenuLinks";

export default function BurgerMenu({ verifyLogout }) {
  return (
    <section className="burgerContainer">
      <Menu>
        <MenuLinks verifyLogout={verifyLogout}/>
      </Menu>
    </section>
  );
}
