import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { artigos as inicializador } from "./components/ListaArtigos";
import Home from "./pages/Home";
import Open from "./pages/Open";
import Adicionar from "./pages/Adicionar";

function App() {
  const [artigos, setArtigos] = useState([]);

  useEffect(() => {
    const salvo = JSON.parse(localStorage.getItem('artigos'));
    setArtigos(salvo.length <= 0 ? inicializador : salvo)
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/alexandre-blog/" element={<Home artigos={artigos} />} />
        <Route path="/alexandre-blog/artigo/:id" element={<Open artigos={artigos} />} />
        <Route path="/alexandre-blog/editar-artigo/:id" element={<Adicionar artigos={artigos} setArtigos={setArtigos} />} />
      </Routes>
    </Router>
  );
}

export default App;
