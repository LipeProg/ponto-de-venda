import { useState } from "react";
import { carregarProdutos, salvarProdutos } from "../data/produtoStorage";

function NovoProduto() {
  const [nome, setNome] = useState("");
  const [codigo, setCodigo] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");
  const [erro, setErro] = useState("");

  function enviar(acao) {
    acao.preventDefault();


  if (nome.trim() === "") {
    setErro("O nome do produto é obrigatório.");
    return;
  }

  if (codigo.trim() === "") {
    setErro("O código do produto é obrigatório.");
    return;
  }

  if (Number(preco) <= 0) {
    setErro("O preço deve ser maior que zero.");
    return;
  }

  if (Number(estoque) < 0) {
    setErro("O estoque não pode ser negativo.");
    return;
  }

  setErro("");

  const novoProduto = {
    id: Date.now(),
    nome,
    codigo,
    preco: Number(preco),
    estoque: Number(estoque),
    ativo: true,
  };
  

  const produtosSalvos = carregarProdutos();


  const novosProdutos = [
    ...produtosSalvos,
    novoProduto
  ];
   
  salvarProdutos(novosProdutos);

  console.log(produtosSalvos);
  console.log(novoProduto);

}

  return (
    <div>
      <h1>Novo Produto</h1>

      {erro && <p>{erro}</p>}

      <form onSubmit={enviar}>
        <div>
          <label>Nome</label>
          <input
            type="text"
            value={nome}
            onChange={(event) => setNome(event.target.value)}
          />
        </div>

        <div>
          <label>Código</label>
          <input
            type="text"
            value={codigo}
            onChange={(event) => setCodigo(event.target.value)}
          />
        </div>

        <div>
          <label>Preço</label>
          <input
            type="number"
            value={preco}
            onChange={(event) => setPreco(event.target.value)}
          />
        </div>

        <div>
          <label>Estoque</label>
          <input
            type="number"
            value={estoque}
            onChange={(event) => setEstoque(event.target.value)}
          />
        </div>

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default NovoProduto;