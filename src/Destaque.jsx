import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Componentes/Header";
import Card from "./Componentes/Card";

export default function Destaque(){
    let lista = JSON.parse(localStorage.getItem("Lista"));
    const filmes= lista.slice(-4)
   return (
      <div>
      
    <Header/>
    <div class="row row-cols-4 mx-5" >
      <Card filme = {filmes}/>
    
         
         </div>
      </div>
   )
}