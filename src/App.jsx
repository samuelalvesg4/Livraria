import {HashRouter, Routes, Route} from 'react-router-dom'

import './styles/reset.css'
import './styles/global.css'

import Layout from './components/layout'
import Home from './pages/home'
import CarrinhoPage from './pages/carrinho'

function App(){
  return(
    <HashRouter>
      <Routes>
        <Route element={<Layout/>}>
          <Route path='/' element={<Home />} />
          <Route path='/carrinho' element={<CarrinhoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
