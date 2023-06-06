// Componente Filho
import { useState } from 'react';
import styles from '../styles/LoginPage.module.css'

const LoginPage = ({ showLabel, verifyLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
    <form className={styles.loginForm} onSubmit={handleSubmit}>
      <div className={styles.emailInput}>
        <label>E-mail:</label>
        <input
          type="email"
          className='form-control'
          value={username}
          onChange={handleUsernameChange}
          autoComplete='username'
        />
      </div>
      <div className={styles.passwordInput}>
        <label>Senha:</label>
        <input
          type="password"
          className='form-control'
          value={password}
          onChange={handlePasswordChange}
          autoComplete='current-password'
        />
      </div>
      <div className={styles.submitButton}>
        <button type="submit">Login</button>
        {showLabel && <label>E-mail/senha inválidos</label>}
      </div>
    </form>
  );
};

export default LoginPage;