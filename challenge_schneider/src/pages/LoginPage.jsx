import LoginContainer from "../components/LoginPageComponents/LoginContainer";

export default function LoginPage({ showLabel, verifyLogin}){
    const style = {
        height: '100vh',
        width: '100vw'
    }
    return (
        <div style={style} className="">
            <LoginContainer showLabel={showLabel} verifyLogin={verifyLogin}  />
        </div>
        
    )
}