import LoginTitle from "../LoginTitle";

export default function LoginContainer({ showLabel, verifyLogin }) {
  return (
    <div className="container-fluid ">
      <div className="row justify-content-center">
        <div className="col-6"><LoginTitle/></div>
      </div>
    </div>
  );
}
