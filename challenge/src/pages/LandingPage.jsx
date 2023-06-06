import MenuLandingPage from "../components/menuLandingPage"
import ConteudoHeader from "../components/conteudoHeader"
import '../styles/landingPage.css'
function LandingPage({user, verifyLogout}){
    return(
        <div>
            <MenuLandingPage user={user} verifyLogout={verifyLogout}/>
            <ConteudoHeader/>
        </div>
    )
}
export default LandingPage