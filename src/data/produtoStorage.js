import produtosJson from "../data/produtos.json";

export function carregarProdutos() {
  return JSON.parse(localStorage.getItem("produtos")) || produtosJson;
}

export function salvarProdutos(produtos) {
  localStorage.setItem(
    "produtos",
    JSON.stringify(produtos)
  );
}