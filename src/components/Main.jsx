import Livros from "../data/livros";
import AddAoCarrinho from "../logic/addCarrinho";

function Main(){
    const LivrosMapped = Livros.map(el=>(
        <div key={el.id} className="livro-card"> {/* Adicione uma classe para estilização futura */}
            <h3>{el.titulo}</h3>
            <p>Preço: R$ {el.preco.toFixed(2).replace('.', ',')}</p> {/* Formatação de preço */}
            <p>Categoria: {el.categoria}</p>
            <button onClick={()=>AddAoCarrinho(el.id)}>Adicinar ao Carrinho</button>
        </div>
    ))
    return(
        <section className="livros-container"> {/* Envolvendo em uma seção */}
            {LivrosMapped}
        </section>
    );
}

export default Main;
