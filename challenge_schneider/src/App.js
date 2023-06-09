import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import EcoConnectHomePage from "./pages/EcoConnectHomePage";
import LoginPage from "./pages/LoginPage";
import Sobre from "./pages/AboutPage";
import MainContainer from "./components/MainContainer";
import Store from "./pages/StorePage";
import Tips from "./pages/TipsPage";
import Social from "./pages/SustainablePage";

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
        localStorage.setItem(login, JSON.stringify(login));
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
          <MainContainer verifyLogout={verifyLogout}>
            <Routes>
              <Route
                path="/"
                element={<EcoConnectHomePage user={user.split("@")[0]} />}
              ></Route>
              <Route path="/sobre" element={<Sobre />}></Route>
              <Route path="/loja" element={<Store />}></Route>
              <Route path="/dicas" element={<Tips />}></Route>
              <Route path="/social" element={<Social />}></Route>
            </Routes>
          </MainContainer>
        ) : (
          <Routes>
            <Route
              path="/"
              element={
                <LoginPage showLabel={showLabel} verifyLogin={verifyLogin} />
              }
            ></Route>
            <Route
              path="/*"
              element={
                <LoginPage showLabel={showLabel} verifyLogin={verifyLogin} />
              }
            ></Route>
          </Routes>
        )}
      </Router>
    </>
  );
}

export default App;
