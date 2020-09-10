import React from "react";

import { Link } from "react-router-dom";

import "./styles.css";

const PageHeader = () => {
    return (
        <header className="page-header">
            <div className="top-bar-container">

                <Link to="/">
                    Home
                </Link>

                <Link to="/user/signup">
                    Cadastrar
                </Link>

                <Link to="/user/login">
                    Login
                </Link>

                <Link to="/cyan/contact">
                    Contato
                </Link>

                <Link to="/cyan/about">
                    Sobre
                </Link>
                
            </div>
        </header>
    )
}

export default PageHeader;