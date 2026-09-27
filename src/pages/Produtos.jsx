import { useState } from "react";
import produtos from "../data/produtos.json";
import ProdutoItem from "../components/ProdutoItem";

function Produtos() {
  const [busca, setBusca] = useState("");

  const produtosFiltrados = produtos.filter((produto) =>
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div>
      <h1>Produtos</h1>

      <input
        type="text"
        placeholder="Buscar produto..."
        value={busca}
        onChange={(event) => setBusca(event.target.value)}
      />

      <ul>
        {produtosFiltrados.map((produto) => (
          <ProdutoItem
            key={produto.id}
            produto={produto}
          />
        ))}
      </ul>
    </div>
  );
}

export default Produtos;