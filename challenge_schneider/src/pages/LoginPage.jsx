import LoginContainer from "../components/LoginPageComponents/LoginContainer";

export default function LoginPage({ showLabel, verifyLogin}){
    const appStyle = {
        height: '100%',
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: "translate(-50%, -50%)",
        width: '100%',
        padding: '40px'
    }
    return (
        <div style={appStyle}>
            <div style={style}>
                <LoginContainer showLabel={showLabel} verifyLogin={verifyLogin}  />
            </div>
        </div>
    )
}