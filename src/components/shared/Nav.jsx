import { Link } from "react-router-dom";
import "../../styles/layout.css";

function Nav() {
  return (
    <nav className="nav">
      <Link to="/">Dashboard</Link>
      <Link to="/produtos">Produtos</Link>
      <Link to="/estoque">Estoque</Link>
    </nav>
  );
}

export default Nav;