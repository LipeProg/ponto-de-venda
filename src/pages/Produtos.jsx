import { useState } from "react";
import { carregarProdutos, salvarProdutos } from "../data/produtoStorage";
import ProdutoItem from "../components/shared/ProdutoItem";
import { Link } from "react-router-dom";

function Produtos() {
  
  const [busca, setBusca] = useState("");
  const [produtos, setProdutos] = useState(carregarProdutos());
  const [mensagem, setMensagem] = useState("");
  const produtosFiltrados = produtos.filter((produto) =>
    
    produto.nome.toLowerCase().includes(busca.toLowerCase())
  );

  function excluirProduto(id) {



    const produtosAtualizados = produtos.filter(
        (produto) => produto.id !== id
      );

      setProdutos(produtosAtualizados);
      salvarProdutos(produtosAtualizados);

      console.log("Produto excluído com sucesso. ID:", id);
      setMensagem("Produto excluído com sucesso!");
  }

  return (
    <div >


        <div className="page-header">
          <h1>Produtos</h1>
          <p>Gerencie os produtos cadastrados.</p>
        </div>

      {mensagem && <p>{mensagem}</p>}

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
              excluirProduto={excluirProduto}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default Produtos;