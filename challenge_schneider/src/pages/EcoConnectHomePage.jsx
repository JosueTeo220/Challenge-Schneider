import { Link } from 'react-router-dom'
import LogoutButton from '../components/LoginPageComponents/FormInput/LogoutButton'
import SideBar from '../components/SideBar'



function EcoConnectHomePage({user, verifyLogout}){
    return(
        <>
            <SideBar />
            <main>
                <h1>Home Page</h1>
                <Link to='/loja'>Loja</Link>
                <LogoutButton verifyLogout={verifyLogout} />
            </main>
        </>
    )
}
export default EcoConnectHomePage