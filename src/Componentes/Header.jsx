import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Header(){
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
              <a class="nav-link active" aria-current="page" href="#"> <Link to= "/cadastro">CADASTRAR</Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"><Link to= "/detalhe">EM ALTA</Link></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Ação</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Terror</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Romance</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Suspense</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Para toda a família</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Desenho</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Lançamentos
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Hoje</a></li>
                <li><a class="dropdown-item" href="#">Essa semana</a></li>
                <li><hr class="dropdown-divider"/>Novos episódios</li>
                <li><a class="dropdown-item" href="#">Novelas</a></li>
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
    </div>
     )

};