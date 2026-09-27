import produtos from '../data/produtos.json';



function Produtos() {
    return (
        <div>
            <h1>Produtos</h1>
            <ul>
                {produtos.map((produto)=> (
                    <li key={produto.id}>
                        {produto.nome} - R$ {produto.preco} - Estoque: {produto.estoque}
                    </li>

                ))}
                
            </ul>
        </div>
    );
}

export default Produtos;