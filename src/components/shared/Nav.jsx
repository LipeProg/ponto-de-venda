import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/estoque">Estoque</Link>
      <Link to="/vendas">Vendas</Link>
    </nav>
  );
}

export default Nav;