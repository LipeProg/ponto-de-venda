
function ProdutoItem({ produto, excluirProduto }) {
    return (
        <li>
            {produto.nome} - R$ {produto.preco} - Estoque: {produto.estoque}
            
            <button onClick={() => excluirProduto(produto.id)}>
                Excluir
            </button>
        
        </li>
    );
}

export default ProdutoItem;