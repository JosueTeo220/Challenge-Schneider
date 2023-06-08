import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import LandingPage from "./pages/LandingPage";

import "./styles/index.css";
import LoginPage from "./pages/LoginPage";
import Logo from "./components/Logo";

function App() {
  const users = ["admin@teste.com", "vivi@teste.com", "josue@teste.com"];
  const passwords = ["1234", "lfeplay", "5678"];
  const [login, setLogin] = useState(false);
  const [showLabel, setShowLabel] = useState(false);
  const [user, setUser] = useState("");

  function verifyLogin(loginData) {
    users.forEach((user, index) => {
      if (
        user === loginData.username &&
        passwords[index] === loginData.password
      ) {
        setUser(user);
        setLogin(true);
      }
    });
    if(!login){
      setShowLabel(true)
      setTimeout(() => {
        setShowLabel(false)
      }, 5000);
    }
  }

  function verifyLogout() {
    setUser("");
    setLogin(false);
  }

  return (
    <>
      {login ? (
        <LandingPage user={user} verifyLogout={verifyLogout} />
      ) : (
        <>
          <Logo />
          <LoginPage showLabel={showLabel} verifyLogin={verifyLogin} />
        </>
      )}
    </>
  );
}

export default App;
