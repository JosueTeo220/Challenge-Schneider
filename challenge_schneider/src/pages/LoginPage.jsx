import LoginContainer from "../components/LoginPageComponents/LoginContainer";

export default function LoginPage({ showLabel, verifyLogin}){
    const appStyle = {
        height: '100vw',
    }
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: "translate(-50%, -50%)",
        width: '65%',
    }
    return (
        <div style={appStyle} className="">
            <div style={style} className="">
                <LoginContainer showLabel={showLabel} verifyLogin={verifyLogin}  />
            </div>
        </div>
    )
}