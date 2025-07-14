import React from 'react';
import '../styles/carrinho.css'
import { useCarrinho } from '../context/CarrinhoContext';
import LivrosData from '../data/livros'

function CarrinhoComponent(){
    const { itensCarrinho, setItensCarrinho, } = useCarrinho();
           const itensCompletos = itensCarrinho.map(carrinhoItem => {
        const livroDetalhes = LivrosData.find(livro => livro.id === carrinhoItem.id);
        return {
    // Mapear os itens do carrinho para incluir os detalhes completos dos livros
    const itensCompletos = itensCarrinho.map(carrinhoItem => {
        const livroDetalhes = LivrosData.find(livro => livro.id === carrinhoItem.id);
        return {
            ...livroDetalhes, // Título, preço, categoria
            quantidade: carrinhoItem.quantidade // Quantidade do carrinho
        };
    }).filter(item => item.id); // Filtrar para garantir que só temos itens válidos (caso um ID não seja encontrado)

    // Calcular o total
    let total = itensCompletos.reduce((acc, item) => acc + (item.preco * item.quantidade || 0), 0);

    // Funções de manipulação do carrinho (serão adicionadas ao contexto futuramente)
    // Por enquanto, vamos adaptá-las para usar o setItensCarrinho do contexto
    function comprar() {
        setItensCarrinho([]); // Limpa o estado do carrinho no contexto
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
    if (itensCarrinho.length === 0) { // Usar o length do estado do carrinho, não de LivrosData
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
