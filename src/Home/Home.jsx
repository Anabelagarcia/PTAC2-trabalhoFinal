import { useState } from "react";
import { Link } from 'react-router-dom';
import Header from '../Componentes/Header';
import Menu from "../Componentes/Menu";


export default function Home(){ 
   let lista = JSON.parse(localStorage.getItem("Lista"));
   return (
      <div>
         <Header/>
         <Menu/>
         <div class="row row-cols-4 mx-5" >
         {lista.map((atividade)=> ( 
            <div class="col">
            <div class="ratio ratio-16x9">
  <iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
</div>
            <div class="card" key={atividade.id}>
            <div class="card-body" />
              <h5 class="card-title">{atividade.nome}</h5>
              <p class="card-text">{atividade.genero}</p>
              </div>
            </div>
         ))}
         </div>
      </div>
   )
}