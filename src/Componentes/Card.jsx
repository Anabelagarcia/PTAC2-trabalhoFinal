import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Card({filme}) {
     return (
          
          filme.map((atividade)=> ( 
               <div class="col">
               <div class="ratio ratio-16x9">
     <iframe src={"https://www.youtube.com/embed/" + atividade.link.slice(17)} title="YouTube video" allowfullscreen></iframe>
   </div>
               <div class="card" key={atividade.id}>
               <div class="card-body"/>
                 <h5 class="card-title">{atividade.nome}</h5>
                 <p class="card-text">{atividade.genero}</p>
                 <Link to={"/detalhe/" + atividade.id} className="">Detalhes</Link>
                 </div>
               </div>
               
            ))
     
     )
}

