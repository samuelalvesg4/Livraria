import React from 'react'; // Importar React é uma boa prática
import '../styles/carrinho.css';
import { useCarrinho } from '../context/CarrinhoContext'; // Importar o hook do carrinho
import LivrosData from '../data/livros'; // Importar a lista completa de livros para obter detalhes

function CarrinhoComponent() {
    // Usar o hook para obter o estado do carrinho e a função setItensCarrinho
    const { itensCarrinho, setItensCarrinho } = useCarrinho();

    // Mapear os itens do carrinho para incluir os detalhes completos dos livros
    const itensCompletos = itensCarrinho.map(carrinhoItem => {
        const livroDetalhes = LivrosData.find(livro => livro.id === carrinhoItem.id);
        // Retorna o item com detalhes completos e a quantidade do carrinho
        return {
            ...livroDetalhes,
            quantidade: carrinhoItem.quantidade
        };
    }).filter(item => item.id); // Garante que só temos itens válidos (se um ID não for encontrado em LivrosData)

    // Calcular o total
    let total = itensCompletos.reduce((acc, item) => acc + (item.preco * item.quantidade || 0), 0);

    // Funções de manipulação do carrinho (agora usam o setItensCarrinho do contexto)
    function comprar() {
        setItensCarrinho([]); // Limpa o estado do carrinho
        alert('Compra Realizada!');
    }

    function increase(itemParaAumentar) {
        setItensCarrinho(prevItens =>
            prevItens.map(item =>
                item.id === itemParaAumentar.id
                    ? { ...item, quantidade: item.quantidade + 1 }
                    : item
            )
        );
    }

    function decrease(itemParaDiminuir) {
        setItensCarrinho(prevItens => {
            const itemExistente = prevItens.find(item => item.id === itemParaDiminuir.id);

            if (itemExistente && itemExistente.quantidade === 1) {
                // Se a quantidade for 1, perguntar antes de remover
                if (window.confirm('Você irá remover este item do carrinho. Tem certeza?')) {
                    return prevItens.filter(item => item.id !== itemParaDiminuir.id);
                }
                return prevItens; // Não faz nada se o usuário cancelar
            } else {
                // Diminui a quantidade
                return prevItens.map(item =>
                    item.id === itemParaDiminuir.id
                        ? { ...item, quantidade: item.quantidade - 1 }
                        : item
                );
            }
        });
    }

    const CarrinhoMapped = itensCompletos.map(el => (
        <div className="carrinhoItem" key={el.id}>
            <span>{el.titulo}</span>
            <span>R$ {el.preco.toFixed(2).replace('.', ',')}</span> {/* Formatação do preço */}
            <div className="quantidadeWrapper">
                <button onClick={() => decrease(el)}>-</button>
                <span className='quantidade'>{el.quantidade}</span>
                <button onClick={() => increase(el)}>+</button>
            </div>
        </div>
    ));

    // Lógica para mostrar mensagem de carrinho vazio
    if (itensCarrinho.length === 0) { // Usar o length do estado do carrinho
        return (
            <p className='noItemWarning'>Nenhum item no carrinho!</p>
        );
    } else {
        return (
            <>
                <div className="carrinhoItensContainer">{CarrinhoMapped}</div>
                <div className="compra-container">
                    <span className='total'>TOTAL: R$ {total.toFixed(2).replace('.', ',')}</span> {/* Formatação do total */}
                    <button onClick={comprar}>Comprar</button>
                </div>
            </>
        );
    }
}

export default CarrinhoComponent;
