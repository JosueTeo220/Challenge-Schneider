import LoginForm from "../components/LoginPageComponents/LoginForm";

export default function LoginPage({ showLabel, verifyLogin}){
    return (
        <LoginForm showLabel={showLabel} verifyLogin={verifyLogin} />
    )
}