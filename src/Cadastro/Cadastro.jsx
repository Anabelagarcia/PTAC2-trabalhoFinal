import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from '../Componentes/Header';


export default function Cadastro(){

    const listaLocalStorage = JSON.parse(localStorage.getItem("Lista")); 
    const [lista, setLista] = useState( listaLocalStorage || []);
    const [nome, setNome] = useState("")
    const [genero, setGenero] = useState("")
    const [descricao, setDescricao] = useState("")
    const [sinopse, setSinopse] = useState("")
    const [recomendacao, setRecomendacao] = useState("")
    const [id, setId] = useState(listaLocalStorage[listaLocalStorage.length - 1]?.id + 1 || 1);
    const [link, setLink] = useState("")
   
    
    
    useEffect(() => {
        localStorage.setItem("Lista", JSON.stringify(lista))
      },[lista]);
  

const salvar = (e) => {
    e.preventDefault()
    setLista([...lista,{
        nome: nome,
        genero: genero,
        descricao: descricao,
        sinopse: sinopse,
        recomendacao: recomendacao,
        id:id,
        link: link 
    }]);

    setNome("")
    setGenero("")
    setDescricao("")
    setSinopse("")
    setId(id+1)
    setLink("")
    setRecomendacao("")
}

return(
  
   <div>
    <Header/>
     <h2>Cadastre</h2>
        <form onSubmit={salvar}>
            <input
              type="text"
              value={nome}
              onChange={(e) => { setNome (e.target.value);
            }}/>
            
            <input
              type="text"
              value={genero}
              onChange={(e) => { setGenero (e.target.value);
            }}/>

           <input
              type="text"
              value={descricao}
              onChange={(e) => { setDescricao (e.target.value);
            }}/>
            <input
              type="text"
              value={sinopse}
              onChange={(e) => { setSinopse (e.target.value);
            }}/>
            <input
              type="text"
              value={link}
              onChange={(e) => { setLink (e.target.value);
            }}/>
            <input
              type="text"
              value={recomendacao}
              onChange={(e) => { setRecomendacao (e.target.value);
            }}/>



            

             <button>ADD</button>
        </form>
        <div class="row row-cols-4 mx-5" ></div>
    </div>
)

}