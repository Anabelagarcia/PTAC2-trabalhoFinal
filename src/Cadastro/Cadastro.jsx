import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cadastro(){
     
    const [nome, setNome] = useState("")
    const [genero, setgenero] = useState("")
    const [descricao, setDescricao] = useState("")
    const [sinopse, setSinopse] = useState("")
    const [id, setId] = useState(1)
    const [link, setLink] = useState("")
    const [lista, setLista] = useState([])
}


const salvar = (e) => {
    e.preventDefault()
    setLista([...lista,{
        nome: nome,
        genero: genero,
        descricao: descricao,
        sinopse: sinopse,
        id:id,
        link: link 
    }])

    setNome("")
    setGenero("")
    setDescricao("")
    setSinopse("")
    setId(id+1)
    setLink("")
}