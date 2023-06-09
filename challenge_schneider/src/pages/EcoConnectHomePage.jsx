import { HeaderTitle } from "../components/EcoConnectHomePageComponents/HeaderTitle";

function EcoConnectHomePage({ user }) {

  const userCapitalized = user.split(' ').map((u) => u.charAt(0).toUpperCase() + u.slice(1).toLowerCase())

  return (
    <div>
      <HeaderTitle userCapitalized={userCapitalized}/>
    </div>
  );
}
export default EcoConnectHomePage;
