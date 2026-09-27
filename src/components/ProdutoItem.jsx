function ProdutoItem({ produto }) {
    return (
        <li>
            {produto.nome} - R$ {produto.preco} - Estoque: {produto.estoque}
        </li>
    );
}

export default ProdutoItem;