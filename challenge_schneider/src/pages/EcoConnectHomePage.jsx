import LogoutButton from '../components/LoginPageComponents/LogoutButton'

function EcoConnectHomePage({user, verifyLogout}){
    return(
        <div>
            <h1>Home Page</h1>
            <LogoutButton verifyLogout={verifyLogout} />
        </div>
    )
}
export default EcoConnectHomePage