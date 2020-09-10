import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import useProtectedPage from "../../hooks/useProtectedPage";
import PageHeader from "../../components/PageHeader";

const baseUrl =
    "http://localhost:3003";

function GetAllMills() {
    useProtectedPage();

    let history = useHistory();

    const [ mills, setMills ] = useState([]);
    
    useEffect(() => {
        getListMills();
    }, []);

    const getListMills = async() => {

        const token = localStorage.getItem("token");

        const axiosConfig = {
            headers: {
                authorization: token,
            }
        };

        try {
            const response = await axios.get(`${baseUrl}/mills/all`, axiosConfig);
            setMills(response.data)
        } catch (error) {
            console.log(error)
        };
    };

    const goToRegisterMillPage = () => {
        history.push("/mills/register")
    };
    
    const goToRegisterHarvestPage = (mill_id) => {
        history.push(`/harvests/${mill_id}/register`)
    };

    return (
        <div id="page-container" className="container">
            <PageHeader title="Header Page" />
            <button onClick={goToRegisterMillPage}>Voltar</button>
            <h3> Lista de Usinas Cadastradas </h3>
            <p>Página para ver todas as usinas cadastradas</p>

            <div>
                <ul>
                    {mills.length === 0 && <div>Carregando...</div>}
                    {mills && mills.map(mill => {
                        return (
                            <li key={mill.name}>
                                <p>Id: {mill.id} </p>
                                <p>Nome da Usina: {mill.name} </p>
                                <p>Data de Criação: {mill.createdAt}</p>
                                <button onClick={() => goToRegisterHarvestPage(mill.id)}>Cadastrar Safra</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
};

export default GetAllMills;