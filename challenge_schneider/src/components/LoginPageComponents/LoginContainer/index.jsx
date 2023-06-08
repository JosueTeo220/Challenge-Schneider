import LoginForm from "../FormInput/LoginForm";
import LoginTitle from "../LoginTitle";

export default function LoginContainer({ showLabel, verifyLogin }) {
  return (
    <div className="container-fluid ">
      <div className="row align-items-center">
        <div className="col-4"><LoginTitle/></div>
        <div className="col-4"><LoginForm showLabel={showLabel} verifyLogin={verifyLogin}/></div>
      </div>
    </div>
  );
}
