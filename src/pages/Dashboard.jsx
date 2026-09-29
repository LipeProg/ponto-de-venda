import { useState } from "react";
import { carregarProdutos } from "../data/produtoStorage";

function Dashboard() {
  const [produtos] = useState(carregarProdutos());

  const totalProdutos = produtos.length;

  const totalEstoque = produtos.reduce(
    (total, produto) => total + produto.estoque,
    0
  );

  const produtosEstoqueBaixo = produtos.filter(
    (produto) => produto.estoque > 0 && produto.estoque <= 5
  ).length;

  const produtosSemEstoque = produtos.filter(
    (produto) => produto.estoque === 0
  ).length;

  return (
    <div>
      <h1>Minerva PDV</h1>

      <p>
        Sistema de ponto de venda para gerenciamento de produtos,
        estoque e vendas.
      </p>

      <section>
        <div>
          <h2>Total de produtos</h2>
          <p>{totalProdutos}</p>
        </div>

        <div>
          <h2>Itens em estoque</h2>
          <p>{totalEstoque}</p>
        </div>

        <div>
          <h2>Estoque baixo</h2>
          <p>{produtosEstoqueBaixo}</p>
        </div>

        <div>
          <h2>Sem estoque</h2>
          <p>{produtosSemEstoque}</p>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;