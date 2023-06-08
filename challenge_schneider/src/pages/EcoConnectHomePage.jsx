import { Link } from 'react-router-dom'
import LogoutButton from '../components/LoginPageComponents/LogoutButton'

function EcoConnectHomePage({user, verifyLogout}){
    return(
        <div>
            <h1>Home Page</h1>
            <Link to='/loja'>Loja</Link>
            <LogoutButton verifyLogout={verifyLogout} />
        </div>
    )
}
export default EcoConnectHomePage