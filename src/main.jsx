import React from 'react'; // É uma boa prática importar React para arquivos JSX
import ReactDOM from 'react-dom/client'; // Importe createRoot de react-dom/client
import App from './App.jsx'; // Importe seu componente principal App
import { CarrinhoProvider } from './context/CarrinhoContext.jsx'; // Importe o CarrinhoProvider

// Encontre o elemento 'root' no seu index.html
const rootElement = document.getElementById('root');

// Crie uma raiz de renderização para o React
const root = ReactDOM.createRoot(rootElement);

// Renderize sua aplicação React dentro do StrictMode e do CarrinhoProvider
root.render(
  <React.StrictMode>
    <CarrinhoProvider>
      <App />
    </CarrinhoProvider>
  </React.StrictMode>,
);
