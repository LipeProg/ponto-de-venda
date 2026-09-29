import { useState } from "react";
import { carregarProdutos } from "../data/produtoStorage";
import "../styles/layout.css";

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
    <div className="page-header">
      <h1>Minerva PDV</h1>

      <p>
        Sistema de ponto de venda para gerenciamento de produtos,
        estoque e vendas.
      </p>

      <section className="dashboard-grid">
          <div className="dashboard-card">
            <span>Total de produtos</span>
            <strong>{totalProdutos}</strong>
          </div>

          <div className="dashboard-card">
            <span>Itens em estoque</span>
            <strong>{totalEstoque}</strong>
          </div>

          <div className="dashboard-card">
            <span>Estoque baixo</span>
            <strong>{produtosEstoqueBaixo}</strong>
          </div>

          <div className="dashboard-card">
            <span>Sem estoque</span>
            <strong>{produtosSemEstoque}</strong>
          </div>

        </section>
    </div>
  );
}

export default Dashboard;