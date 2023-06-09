import { bubble as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import "./BurgerMenu.css";

export default function BurgerMenu({ verifyLogout }) {
  return (
    <section className="burgerContainer">
      <Menu>
        <Link id="home" className="bm-item-list" href="/">
          Home
        </Link>
        <Link id="about" className="bm-item-list" href="/about">
          About
        </Link>
        <Link id="contact" className="bm-item-list" href="/contact">
          Contact
        </Link>
      </Menu>
    </section>
  );
}
