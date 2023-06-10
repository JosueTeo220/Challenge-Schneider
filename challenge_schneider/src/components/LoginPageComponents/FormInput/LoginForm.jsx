import { useState } from "react";
import styles from "./LoginForm.module.css";
import { ReactComponent as PersonIcon } from "../../../assets/icons/person.svg";

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
          <label htmlFor="" className={styles.labelsForm}>
            Email
          </label>
          <PersonIcon
            height={48}
            width={48}
            className={styles.iconPersonForm}
          />
          <input
            type="email"
            className="form-control"
            value={username}
            onChange={handleUsernameChange}
            autoComplete="username"
            placeholder="Digite aqui seu Email"
          />
        </div>
        <div className={styles.passwordInput}>
          <label htmlFor="" className={styles.labelsForm}>
            Senha
          </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={handlePasswordChange}
            autoComplete="current-password"
            placeholder="Digite aqui sua senha"
          />
        </div>
        <div className={styles.submitButton}>
          <button type="submit">Iniciar</button>
          {showLabel && <label>E-mail/senha inválidos. Veja o manual do usuário</label>}
        </div>
      </form>
    </div>
  );
}
