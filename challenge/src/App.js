import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import DicasSustentaveis from './components/DicasSustentaveis';
import NoticiasESG from './components/NoticiasESG';
import FaleConosco from './components/FaleConosco';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dicas-sustentaveis" element={<DicasSustentaveis />} />
        <Route path="/noticias-esg" element={<NoticiasESG />} />
        <Route path="/fale-conosco" element={<FaleConosco />} />
        <Route path="*" element={<div className="content"><h2>Página não encontrada</h2></div>} />
      </Routes>
    </Router>
  );
};

export default App;
