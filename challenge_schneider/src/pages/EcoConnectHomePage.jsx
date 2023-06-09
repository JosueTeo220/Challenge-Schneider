import { Link } from 'react-router-dom'
import LogoutButton from '../components/LoginPageComponents/FormInput/LogoutButton'
import SideBar from '../components/SideBar'
import MainContainer from '../components/MainContainer'



function EcoConnectHomePage({user, verifyLogout}){
    return(
        <>
            <SideBar />
            <MainContainer>
                <h1 className='h1'>Home Page</h1>
                <Link to='/loja'>Loja</Link>
                <LogoutButton verifyLogout={verifyLogout} />
            </MainContainer>
        </>
    )
}
export default EcoConnectHomePage