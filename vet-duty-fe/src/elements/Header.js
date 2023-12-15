// Header.js
import React from 'react';
const Header = () => {
    return (
       <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Plantão Vet - Encontre ou Publique o seu</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Buscar Plantão</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Publicar Plantão</a>
                    </li>
                    <button type="button" class="btn btn-info">Login</button>
                </ul>
                </div>
            </div>
            </nav>
        </div>
    );
};

export default Header;
