import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Links from "./components/Links";

import Catalogo from "./pages/Catalogo";
import Contato from "./pages/Contato";
import Carrinho from "./pages/Carrinho";

function App() {
  
  return (
    <div>
      <Router>
        <Header links={<Links />} />
        <Routes>
          <Route path="/" element={<Catalogo />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/carrinho" element={<Carrinho />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
