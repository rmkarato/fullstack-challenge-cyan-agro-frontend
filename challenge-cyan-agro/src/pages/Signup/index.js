import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";

const baseUrl =
    "http://localhost:3003";

function Signup() {
    let history = useHistory();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    
    const handleUpdateName = (event) => {
        setName(event.target.value);
    };

    const handleUpdateEmail = (event) => {
        setEmail(event.target.value);
    };
    
    const handleUpdatePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleUpdateConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    };
    
    const buttonSignUp = async(event) => {
        event.preventDefault();

        const body = {
            name: name,
            email: email,
            password: password,
        };
        
        try {
            if (body.password === confirmPassword) {
                axios
                .post(`${baseUrl}/user/signup`, body)
                .then((response) => {
                    console.log(response);
                    window.localStorage.setItem("token", response.data.token);
                    alert("Usuário criado com sucesso.");
                    history.push("/user/login");
                })
                .catch((e) => {
                    alert("Falha no login");
                    console.log(e);
                });
            } else {
                alert("Senhas não conferem!");
            }
        } catch(e) {
            alert("Falha no cadastro.")
            console.log(e)
        }
    };

    const goToLoginPage = () => {
        history.push("/user/login");
    };

    return (
        <div id="page-container" className="container">
            <PageHeader title="Header Page" />
            <h3>Cadastrar</h3>
            <div>
                <div>
                    <label htmlFor="name">Nome*</label>
                    <input
                        required
                        type="text"
                        placeholder="Insira seu nome"
                        name="name"
                        value={name}
                        onChange={handleUpdateName}
                    />
                </div>
               
                <div>
                    <label htmlFor="email">Email*</label>
                    <input
                        required
                        type="email"
                        placeholder="email@email.com"
                        name="email"
                        value={email}
                        onChange={handleUpdateEmail}
                    />
                </div>
                
                <div>
                    <label htmlFor="password">Senha*</label>
                    <input
                        required
                        placeholder="Mínimo de 6 caracteres"
                        pattern="[A-Za-z0-9 ]{6,}"
                        name="password"
                        value={password}
                        onChange={handleUpdatePassword}
                    />
                </div>
                
                <div>
                    <label htmlFor= "confirmPassword">Confirmar Senha*</label>
                    <input
                        required
                        placeholder="Confirme a senha anterior"
                        pattern="[A-Za-z0-9 ]{6,}"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleUpdateConfirmPassword}
                    />
                </div>
                
            </div>
            <button onClick={buttonSignUp}>Criar Conta</button>
            <button onClick={goToLoginPage}>Já possui uma conta? Entrar.</button>
        </div>

    );
};

export default Signup;