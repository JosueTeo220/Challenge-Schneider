import { useState } from "react";
import styles from "./LoginForm.module.css";
import personIcon from '../../../assets/icons/person.svg'

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
    <div className="container-fluid">
      <form className={styles.loginForm} onSubmit={handleSubmit}>
      <div className={styles.emailInput}>
        <input
          type="email"
          className="form-control"
          value={username}
          onChange={handleUsernameChange}
          autoComplete="username"
          placeholder="Usuário"
        />
      </div>
      <div className={styles.passwordInput}>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={handlePasswordChange}
          autoComplete="current-password"
          placeholder="Senha"
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
