import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

import useProtectedPage from "../../hooks/useProtectedPage";
import PageHeader from "../../components/PageHeader";

const baseUrl =
    "http://localhost:3003";

function RegisterHarvest() {
    useProtectedPage();
    const { mill_id } = useParams();

    let history = useHistory();

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [newToken, setNewToken] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setNewToken(token)
    }, []);

    const handleUpdateStartDate = (event) => {
        setStartDate(event.target.value);
    };

    const handleUpdateEndDate = (event) => {
        setEndDate(event.target.value);
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
            start_date: startDate,
            end_date: endDate
        };

        try {
            const response = await axios.post(`${baseUrl}/harvests/${mill_id}/register`, body, axiosConfig);
            console.log(response.data);
            alert("Safra cadastrada com sucesso!");
            history.push("/harvests/all");
        } catch(e) {
            alert("Falha ao cadastra safra.");
            console.log(e);
        }
    };
    
    const goToListMillsPage = () => {
        history.push("/mills/all")
    };

    const goToListHarvestsPage = () => {
        history.push("/harvests/all")
    };

    return (
        <div id="page-container" className="container">
            <PageHeader title="Header Page" />
             <button onClick={goToListMillsPage}>Voltar</button>
             <button onClick={goToListHarvestsPage}>Ver Safras Cadastradas</button>
            <h3>Registro - Safra</h3>
            <div>

                <div>
                    <label htmlFor="startDate">Data de Ínicio:</label>
                    <input 
                        required
                        type="text"
                        placeholder="YYYY-MM-DD"
                        name="startDate"
                        value={startDate}
                        onChange={handleUpdateStartDate}
                    />
                </div>

                <div>
                    <label htmlFor="endDate">Data Final:</label>
                    <input 
                        required
                        type="text"
                        placeholder="YYYY-MM-DD"
                        name="endDate"
                        value={endDate}
                        onChange={handleUpdateEndDate}
                    />
                </div>

            </div>
            <button onClick={buttonRegister}>Cadastrar</button>
        </div>
    )
};

export default RegisterHarvest;