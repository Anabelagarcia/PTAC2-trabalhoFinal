import { useState } from "react";
import { Link } from 'react-router-dom';
import Header from '../Componentes/Header';
import Menu from "../Componentes/Menu";


export default function Home(){

    return(
        <div>
           <Header/>
           <Menu/>
           <h1>PTAC 2 - PROJETO FINAL</h1>
           <Link to= "/cadastro">Cadastrar</Link>
        </div>
     );

}