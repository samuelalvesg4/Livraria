import React from 'react'; // É uma boa prática importar React, mesmo que não usado diretamente no JSX aqui
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { CarrinhoProvider } from './context/CarrinhoContext.jsx'; // ESSA LINHA É CRUCIAL

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CarrinhoProvider> {/* ESSA LINHA E A FECHAMENTO SÃO CRUCIAIS */}
      <App />
    </CarrinhoProvider>
  </React.StrictMode>,
);
