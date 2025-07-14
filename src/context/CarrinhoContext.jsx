import React, { createContext, useState, useContext } from 'react';

// 1. Cria o Contexto
export const CarrinhoContext = createContext();

// 2. Cria o Provider do Contexto
export const CarrinhoProvider = ({ children }) => {
  const [itensCarrinho, setItensCarrinho] = useState([]);

  // Função para adicionar um item ao carrinho
  const adicionarItem = (livroId) => {
    setItensCarrinho((prevItens) => {
      const itemExistente = prevItens.find((item) => item.id === livroId);

      if (itemExistente) {
        // Se o item já existe, incrementa a quantidade
        return prevItens.map((item) =>
          item.id === livroId ? { ...item, quantidade: item.quantidade + 1 } : item
        );
      } else {
        // Se o item não existe, adiciona com quantidade 1
        return [...prevItens, { id: livroId, quantidade: 1 }];
      }
    });
  };

  // Você pode adicionar outras funções aqui (removerItem, atualizarQuantidade, limparCarrinho)
  // Por simplicidade, as funções de increase/decrease do carrinhoComponent usam setItensCarrinho diretamente.
  // Você pode movê-las para cá se quiser uma lógica centralizada.

  return (
    <CarrinhoContext.Provider value={{ itensCarrinho, setItensCarrinho, adicionarItem }}>
      {children}
    </CarrinhoContext.Provider>
  );
};

// Hook personalizado para usar o carrinho mais facilmente
export const useCarrinho = () => {
  return useContext(CarrinhoContext);
};
