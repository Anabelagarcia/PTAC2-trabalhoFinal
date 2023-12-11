import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Detalhe(){
   const {id}=useParams();
   const lista = JSON.parse( localStorage.getItem("Lista"));

   const atividade = lista.filter( (objeto) => {
      if(objeto.id == id){
          return objeto;
      }
      return null;
   })
  return(
   <div class="col cols-2">
   <div class="ratio ratio-16x9">
<iframe src={"https://www.youtube.com/embed/" + atividade[0].link.slice(17)} title="YouTube video" allowfullscreen></iframe>
</div>
   <div class="card" key={atividade.id}>
   <div class="card-body"/>
     <h5 class="card-title">{atividade[0].nome}</h5>
     <p class="card-text">{atividade[0].genero}</p>
     <p class="card-text">{atividade[0].descricao}</p>
     <p class="card-text">{atividade[0].sinopse}</p>
     <p class="card-text">{atividade[0].recomendacao}</p>
     </div>
   </div>   
  );
}