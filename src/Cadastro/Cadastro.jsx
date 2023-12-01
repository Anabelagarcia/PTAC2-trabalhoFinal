import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function Cadastro(){
     
    const [nome, setNome] = useState("")
    const [genero, setgenero] = useState("")
    const [descricao, setDescricao] = useState("")
    const [sinopse, setSinopse] = useState("")
    const [id, setId] = useState(1)
    const [link, setLink] = useState("")
    const [lista, setLista] = useState([])

    
    
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
        id:id,
        link: link 
    }]);

    setNome("")
    setGenero("")
    setDescricao("")
    setSinopse("")
    setId(id+1)
    setLink("")
}

return(
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><Link to="/">HOME</Link></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Mundo ADD</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Mulheres</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Homens</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Infantil</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Esportes</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Novidades</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Acessórios</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Coleções</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Marcas
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Puma</a></li>
                <li><a class="dropdown-item" href="#">Nike</a></li>
                <li><hr class="dropdown-divider"/></li>
                <li><a class="dropdown-item" href="#">Adidas</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" aria-disabled="true">Outlet</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success" type="submit">Procurar</button>
          </form>
        </div>
      </div>
    </nav>

     <h2>Cadastre</h2>
        <form onSubmit={salvar}>
            <input
              type="text"
              value={nome}
              onChange={(e) => { setNome (e.target.value);
            }}/>
            

             <button>ADD</button>
        </form>
        <div class="row row-cols-4 mx-5" ></div>
    </div>
)

}