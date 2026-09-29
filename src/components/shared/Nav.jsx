import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav>
      <Link to="/">Dashboard</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/estoque">Estoque</Link>
    </nav>
  );
}

export default Nav;