import { BrowserRouter, Routes, Route} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Estoque from "./pages/Estoque";
import Produtos from "./pages/Produtos";
import Vendas from "./pages/Vendas";
import NovoProduto from "./pages/NovoProduto";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <BrowserRouter>

    <Header />

    <main>

    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/estoque" element={<Estoque />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/vendas" element={<Vendas />} />
      <Route path="/produtos/novo-produto" element={<NovoProduto />} />
    </Routes>



    </main>    

    <Footer />

    </BrowserRouter>

  );
}

export default App;