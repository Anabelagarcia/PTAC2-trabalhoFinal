import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Detalhe from './Detalhe'
import Cadastro from './Cadastro/Cadastro'
import Card from './Componentes/Card'
import Header from './Componentes/Header'
import Menu from './Componentes/Menu'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detalhe" element={<Detalhe />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/card" element={<Card />}></Route>
        <Route path="/header" element={<Header />}></Route>
        <Route path="/menu" element={<Menu />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
