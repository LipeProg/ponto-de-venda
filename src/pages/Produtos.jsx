import { useState } from "react";
import produtos from "../data/produtos.json";
import ProdutoItem from "../components/ProdutoItem";
import { Link } from "react-router-dom";

function Produtos() {
  const [busca, setBusca] = useState("");

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <h1>Produtos</h1>
      <Link to="/produtos/novo-produto">
          Cadastrar produto
      </Link>

      <input
        type="text"
        placeholder="Buscar produto..."
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
      />

      {produtosFiltrados.length === 0 ? (
        <p>Nenhum produto encontrado.</p>
      ) : (
        <ul>
          {produtosFiltrados.map((produto) => (
            <ProdutoItem
              key={produto.id}
              produto={produto}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Produtos;