import produtos from '../data/produtos.json';
import ProdutoItem from '../components/ProdutoItem';


function Produtos() {
    return (
        <div>
            <h1>Produtos</h1>
            <ul>
                {produtos.map((produto)=> (
                   <ProdutoItem 
                     key={produto.id} 
                     produto={produto} 
                    />

                ))}
                
            </ul>
        </div>
    );
}

export default Produtos;