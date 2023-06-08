import { Link } from "react-router-dom";
import profile from "../../assets/icons/profile-icon.png";

export default function LogoutButton({ verifyLogout }) {
  return (
    <div>
      <img src={profile} alt="perfil" height={30} width={30} />
      <Link to="/" onClick={() => verifyLogout()}>
        Logout
      </Link>
    </div>
  );
}
