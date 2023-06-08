import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import EcoConnectHomePage from "./pages/EcoConnectHomePage";
import LoginPage from "./pages/LoginPage";
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
        localStorage.setItem(login, JSON.stringify(login))
      }
    });
    if (!login) {
      setShowLabel(true);
      setTimeout(() => {
        setShowLabel(false);
      }, 5000);
    }
  }

  function verifyLogout() {
    setUser("");
    setLogin(false);
    setShowLabel(false);
  }
  return (
    <>
      <Router>
        {login ? (
          <Routes>
            <Route path="/" element={<EcoConnectHomePage user={user} verifyLogout={verifyLogout} />}></Route>
            <Route path="/sobre" element={<></>}></Route>
            <Route path="/loja" element={<>ola mundo</>}></Route>
            <Route path="/dicas" element={<></>}></Route>
            <Route path="/social" element={<></>}></Route>
          </Routes>
        ) : (
        <Routes>
          <Route path="/" element={<LoginPage showLabel={showLabel} verifyLogin={verifyLogin}/>}></Route>
          <Route path="/*" element={<LoginPage showLabel={showLabel} verifyLogin={verifyLogin}/>}></Route>
        </Routes>
        )}
      </Router>
    </>
  );
}

export default App;
