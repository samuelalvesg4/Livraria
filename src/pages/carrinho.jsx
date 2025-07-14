import React from 'react';
import '../styles/carrinho.css';
import { useCarrinho } from '../context/CarrinhoContext';
import LivrosData from '../data/livros';

function CarrinhoPage() { // INÍCIO DA FUNÇÃO CARRINHOPAGE
    const { itensCarrinho, setItensCarrinho } = useCarrinho();

    const itensCompletos = itensCarrinho.map(carrinhoItem => {
        const livroDetalhes = LivrosData.find(livro => livro.id === carrinhoItem.id);
        if (!livroDetalhes) {
            return null;
        }
        return {
            ...livroDetalhes,
            quantidade: carrinhoItem.quantidade
        };
    }).filter(Boolean);

    let total = itensCompletos.reduce((acc, item) => acc + (item.preco * item.quantidade || 0), 0);

    function comprar() {
        setItensCarrinho([]);
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
                if (window.confirm('Você irá remover este item do carrinho. Tem certeza?')) {
                    return prevItens.filter(item => item.id !== itemParaDiminuir.id);
                }
                return prevItens;
            } else {
                return prevItens.map(item =>
                    item.id === itemParaDiminuir.id
                        ? { ...item, quantidade: item.quantidade - 1 }
                        : item
                );
            }
        });
    }
    // FIM DA FUNÇÃO decrease -- AQUI COMEÇA O BLOCO DE RENDERIZAÇÃO DA FUNÇÃO CarrinhoPage
    // Não havia uma chave de fechamento para a função CarrinhoPage antes
    // e o código a seguir estava "solto".

    const CarrinhoMapped = itensCompletos.map(el => (
        <div className="carrinhoItem" key={el.id}>
            <span>{el.titulo}</span>
            <span>R$ {el.preco.toFixed(2).replace('.', ',')}</span>
            <div className="quantidadeWrapper">
                <button onClick={() => decrease(el)}>-</button>
                <span className='quantidade'>{el.quantidade}</span>
                <button onClick={() => increase(el)}>+</button>
            </div>
        </div>
    ));

    // Lógica para mostrar mensagem de carrinho vazio e o retorno JSX
    if (itensCarrinho.length === 0) {
        return (
            <p className='noItemWarning'>Nenhum item no carrinho!</p>
        );
    } else {
        return (
            <>
                <div className="carrinhoItensContainer">{CarrinhoMapped}</div>
                <div className="compra-container">
                    <span className='total'>TOTAL: R$ {total.toFixed(2).replace('.', ',')}</span>
                    <button onClick={comprar}>Comprar</button>
                </div>
            </>
        );
    }
} // FIM DA FUNÇÃO CARRINHOPAGE (AGORA FECHADA CORRETAMENTE)

export default CarrinhoPage;
    }
} // FIM DA FUNÇÃO CARRINHOPAGE (AGORA FECHADA CORRETAMENTE)

export default CarrinhoPage;
