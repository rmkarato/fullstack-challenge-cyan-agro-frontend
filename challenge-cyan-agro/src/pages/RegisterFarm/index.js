import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

import useProtectedPage from "../../hooks/useProtectedPage";
import PageHeader from "../../components/PageHeader";

const baseUrl =
    "http://localhost:3003";

function RegisterFarm() {
    useProtectedPage();
    const { harvest_id } = useParams();

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
            const response = await axios.post(`${baseUrl}/farms/${harvest_id}/register`, body, axiosConfig);
            console.log(response.data)
            alert("Safra cadastrada com sucesso!");
            history.push("/farms/all");
        } catch(e) {
            alert("Falha ao cadastrar fazenda.");
            console.log(e);
        }
    }

    const goToListHarvestsPage = () => {
        history.push("/harvests/all")
    };

    const goToListFarmsPage = () => {
        history.push("/farms/all")
    };

    return (
        <div id="page-container" className="container">
            <PageHeader title="Header Page" />
             <button onClick={goToListHarvestsPage}>Voltar</button>
             <button onClick={goToListFarmsPage}>Ver Fazendas Cadastradas</button>
            <h3>Registro - Fazenda</h3>
            <div>

                <div>
                    <label htmlFor="name">Nome*</label>
                    <input
                        required
                        type="text"
                        placeholder="Insira o nome da fazenda"
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

export default RegisterFarm;