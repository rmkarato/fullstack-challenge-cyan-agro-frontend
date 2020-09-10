import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import useProtectedPage from "../../hooks/useProtectedPage";

const baseUrl =
    "http://localhost:3003";

    
function GetAllFarms() {
    useProtectedPage();

    let history = useHistory();

    const [ farms, setFarms ] = useState([]);

    useEffect(() => {
        getListFarms();
    }, []);

    const getListFarms = async() => {
        const token = localStorage.getItem("token");

        const axiosConfig = {
            headers: {
                authorization: token,
            }
        };

        try {
            const response = await axios.get(`${baseUrl}/farms/all`, axiosConfig);
            setFarms(response.data)
        } catch(error) {
            console.log(error)
        }
    }

    const goToRegisterFarmPage  = (harvest_id) => {
        history.push(`/farms/${harvest_id}/register`)
    }

    const goToRegisterFieldsPage = (farm_id) => {
        history.push(`/fields/${farm_id}/register`)
    }

    return (
        <div>
            <button onClick={goToRegisterFarmPage}>Voltar</button>
            <h3>Lista de Fazendas Cadastradas</h3>
            <p>Página para ver todas as fazendas cadastradas</p>

            <div>
                <ul>
                    {farms.length === 0 && <div>Carregando...</div>}
                    {farms && farms.map(farm => {
                        return (
                            <li key={farm.id}>
                                <p>Id: {farm.id} </p>
                                <p>Nome da Fazenda: {farm.name} </p>
                                <p>Data de Criação: {farm.createdAt}</p>
                                <button onClick={() => goToRegisterFieldsPage(farm.id)}>Cadastrar Talhão</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
};

export default GetAllFarms;