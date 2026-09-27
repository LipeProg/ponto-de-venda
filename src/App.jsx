import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Estoque from "./pages/Estoque";
import Produtos from "./pages/Produtos";
import Vendas from "./pages/Vendas";
import NovoProduto from "./pages/NovoProduto";

function App() {
  return (
    <BrowserRouter>

    <header>

      <h1>Ponto de Venda</h1>

      <nav>
        <Link to="/">Dashboard</Link>
        <Link to="/estoque">Estoque</Link>
        <Link to="/produtos">Produtos</Link>
        <Link to="/vendas">Vendas</Link>
      </nav>

    </header>

    <main>

    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/estoque" element={<Estoque />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/vendas" element={<Vendas />} />
      <Route path="/produtos/novo-produto" element={<NovoProduto />} />
    </Routes>



    </main>    
    </BrowserRouter>

  );
}

export default App;