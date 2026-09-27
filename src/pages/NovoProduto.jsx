import { useState } from "react";

function NovoProduto() {
  const [nome, setNome] = useState("");
  const [codigo, setCodigo] = useState("");
  const [preco, setPreco] = useState("");
  const [estoque, setEstoque] = useState("");

  function enviar(acao) {
    acao.preventDefault();

    console.log({
      nome,
      codigo,
      preco,
      estoque,
    });
  }

  return (
    <div>
      <h1>Novo Produto</h1>

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