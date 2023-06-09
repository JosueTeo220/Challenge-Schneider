import { Link } from "react-router-dom";
import { ReactComponent as PersonIcon } from "../../assets/icons/person.svg";

export default function LogoutButton({ verifyLogout }) {
  return (
    <div>
      <Link to="/" onClick={() => verifyLogout()}>
        Logout
      </Link>
      <PersonIcon
        height={28}
        width={28}
        fill={"#fff"}
        style={{ paddingLeft: "5px", marginBottom: "5px" }}
      />
    </div>
  );
}
