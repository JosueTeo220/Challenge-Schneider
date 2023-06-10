import ExplicacaoPontos from "../components/EcoConnectHomePageComponents/ExplicacaoPontos";
import { HeaderTitle } from "../components/EcoConnectHomePageComponents/HeaderTitle";
import { Ranking } from "../components/EcoConnectHomePageComponents/Ranking";

function EcoConnectHomePage({ user }) {

  const userCapitalized = user.split(' ').map((u) => u.charAt(0).toUpperCase() + u.slice(1).toLowerCase())

  return (
    <div>
      <HeaderTitle userCapitalized={userCapitalized}/>
      <ExplicacaoPontos/>
      <Ranking/>
    </div>
  );
}
export default EcoConnectHomePage;
