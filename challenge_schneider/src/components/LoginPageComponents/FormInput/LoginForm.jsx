import { useState } from "react";
import styles from "./LoginForm.module.css";
import personIcon from "../../../assets/icons/person.svg";

export default function LoginForm({ showLabel, verifyLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const loginData = {
      username: username,
      password: password,
    };
    verifyLogin(loginData);
  };

  return (
    <div className={styles.form_container}>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <div className={styles.emailInput}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="48"
          viewBox="0 -960 960 960"
          width="48"
        >
          <path d="M480-481q-66 0-108-42t-42-108q0-66 42-108t108-42q66 0 108 42t42 108q0 66-42 108t-108 42ZM160-160v-94q0-38 19-65t49-41q67-30 128.5-45T480-420q62 0 123 15.5t127.921 44.694q31.301 14.126 50.19 40.966Q800-292 800-254v94H160Zm60-60h520v-34q0-16-9.5-30.5T707-306q-64-31-117-42.5T480-360q-57 0-111 11.5T252-306q-14 7-23 21.5t-9 30.5v34Zm260-321q39 0 64.5-25.5T570-631q0-39-25.5-64.5T480-721q-39 0-64.5 25.5T390-631q0 39 25.5 64.5T480-541Zm0-90Zm0 411Z" />
        </svg>
        <label htmlFor="">Email</label>
          <input
            type="email"
            className="form-control"
            value={username}
            onChange={handleUsernameChange}
            autoComplete="username"
            placeholder="Digite seu Email"
          />
          
        </div>
        <div className={styles.passwordInput}>
        <label htmlFor="">Senha</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="current-password"
            placeholder="Digite sua senha"
          />
        </div>
        <div className={styles.submitButton}>
          <button type="submit">Iniciar</button>
          {showLabel && <label>E-mail/senha inválidos</label>}
        </div>
      </form>
    </div>
  );
}
