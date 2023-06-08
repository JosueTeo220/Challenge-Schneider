import React, { useState } from "react";
import EcoConnectHomePage from "./pages/EcoConnectHomePage";

import LoginPage from "./pages/LoginPage";
import { BrowserRouter } from "react-router-dom";

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
    setShowLabel(false)
  }

  return (
    <BrowserRouter>
      {login ? (
        <EcoConnectHomePage user={user} verifyLogout={verifyLogout} />
      ) : (
        <>
          <LoginPage showLabel={showLabel} verifyLogin={verifyLogin} />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;
