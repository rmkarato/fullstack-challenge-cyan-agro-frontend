import React from "react";
import { Link } from "react-router-dom";

import "./styles.css";
import Logo from "../../assets/images/cyan-logo.png"

const PageHeader = () => {
    return (
        <header class="page-header">
            <Link to="/">
                <img class="img" src={Logo} alt="Logo"/>
            </Link>

            <div class="top-bar-container">

                <Link to="/">
                    Home
                </Link>

                <Link to="/user/signup">
                    Cadastrar
                </Link>

                <Link to="/user/login">
                    Login
                </Link>

                <Link to="/cyan/about">
                    Sobre
                </Link>

                <Link to="/cyan/contact">
                    Contato
                </Link>
                
            </div>
        </header>
    )
}

export default PageHeader;