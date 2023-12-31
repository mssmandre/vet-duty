// Header.js
import React from 'react';
import Logo from '../public/images/logo.png';

const Header = () => {
    return (
       <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <img src={Logo} alt="Logo" width={50}/>
                <a class="navbar-brand" href="#">Emprega saúde</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Buscar</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link" href="#">Contratar</a>
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
