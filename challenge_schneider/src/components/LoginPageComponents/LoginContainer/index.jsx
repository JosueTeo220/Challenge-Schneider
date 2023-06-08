import LoginForm from "../FormInput/LoginForm";
import LoginTitle from "../LoginTitle";
import './LoginContainer.module.css'

export default function LoginContainer({ showLabel, verifyLogin }) {
  return (
    <div className="container-fluid">
      <div className="row align-items-center">
        <div className="col-md-6"><LoginTitle/></div>
        <div className="col-md-6"><LoginForm showLabel={showLabel} verifyLogin={verifyLogin}/></div>
      </div>
    </div>
  );
}
