import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";

const baseUrl =
    "http://localhost:3003";

function Login() {
    let history = useHistory();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleUpdateEmail = (event) => {
        setEmail(event.target.value);
    };
    
    const handleUpdatePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async(event) => {
        event.preventDefault();

        const body = {
            email: email,
            password: password,
        };

        try {
            const response = await axios.post(`${baseUrl}/user/login`, body);
            console.log(response);
            window.localStorage.setItem("token", response.data.token);
            alert("Usuário logado.");
            history.push("/");
        } catch (e) {
            alert("Falha no login");
            console.log(e);
        }
    };

    const goToSignUpPage = () => {
        history.push("/user/signup");
    };

    return (
        <div id="page-container" className="container">
            <PageHeader title="Header Page" />
            <h3>Entrar</h3>
            <div>

                <div>
                    <label htmlFor="email">E-mail</label>
                    <input                 
                        required
                        type="email"
                        placeholder="Insira seu e-mail"
                        name="email"
                        value={email}
                        onChange={handleUpdateEmail}
                    />
                </div>

                <div>
                    <label htmlFor="password">Senha</label>
                    <input
                        required
                        placeholder="email@email.com"
                        name="password"
                        value={password}
                        onChange={handleUpdatePassword}
                    />
                </div>

                <button onClick={handleLogin}>Entrar</button>
                <button onClick={goToSignUpPage}>Cadastrar-se</button>

            </div>
        </div>
    )
}

export default Login;