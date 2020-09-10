import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import useProtectedPage from "../../hooks/useProtectedPage";
import PageHeader from "../../components/PageHeader";

const baseUrl =
    "http://localhost:3003";

function RegisterMill() {
    useProtectedPage();

    let history = useHistory();

    const [name, setName] = useState("");
    const [newToken, setNewToken] = useState(null);


    useEffect(() => {
        const token = localStorage.getItem("token");
        setNewToken(token)
    }, []);

    const handleUpdateName = (event) => {
        setName(event.target.value);
    };

    const buttonRegister = async(event) => {
        event.preventDefault();

        const token = localStorage.getItem("token");

        const axiosConfig = {
            headers: {
                authorization: token,
            }
        };

        const body = {
            name: name
        };

        try {
            const response = await axios.post(`${baseUrl}/mills/register`, body, axiosConfig);
            console.log(response.data);
            alert("Usina cadastrada com sucesso.");
            history.push("/mills/all");
        } catch(e) {
            alert("Falha ao cadastra usina.");
            console.log(e);
        }
    }

    const goToListMillsPage = () => {
        history.push("/mills/all")
    };

    const goToHomePage = () => {
        history.push("/")
    }

    return (
        <div id="page-container" className="container">
            <PageHeader title="Header Page" />
            <button onClick={goToListMillsPage}>Ver Usinas Cadastradas</button>
            <button onClick={goToHomePage}>Home</button>
            <h3>Registro - Usina</h3>
            <div>

                <div>
                    <label htmlFor="name">Nome*</label>
                    <input
                        required
                        type="text"
                        placeholder="Insira o nome da usina"
                        name="name"
                        value={name}
                        onChange={handleUpdateName}
                    />
                </div>

            </div>
            <button onClick={buttonRegister}>Cadastrar</button>
        </div>
    )
};

export default RegisterMill;