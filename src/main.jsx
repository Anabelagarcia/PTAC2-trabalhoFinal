import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home/Home'
import Detalhe from './Detalhe'
import Destaque from './Destaque'
import Cadastro from './Cadastro/Cadastro'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/detalhe/:id" element={<Detalhe />}></Route>
        <Route path="/destaque" element={<Destaque />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
       
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
