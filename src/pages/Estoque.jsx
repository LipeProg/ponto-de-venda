import { useState } from "react";
import { carregarProdutos } from "../data/produtoStorage";

function Estoque() {
  const [produtos] = useState(carregarProdutos());

  return (
    <div>
      <h1>Estoque</h1>

      <p>Acompanhe a quantidade disponível de cada produto.</p>

      <ul>
        {produtos.map((produto) => (
          <li key={produto.id}>
            <strong>{produto.nome}</strong>

            <span>Estoque: {produto.estoque}</span>

            {produto.estoque === 0 ? (
              <span>Sem estoque</span>
            ) : produto.estoque <= 5 ? (
              <span>Estoque baixo</span>
            ) : (
              <span>Estoque normal</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Estoque;