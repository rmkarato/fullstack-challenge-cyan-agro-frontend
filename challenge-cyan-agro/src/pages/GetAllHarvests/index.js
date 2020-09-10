import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import useProtectedPage from "../../hooks/useProtectedPage";

const baseUrl =
    "http://localhost:3003";

function GetAllHarvests() {
    useProtectedPage();

    let history = useHistory();

    const [ harvests, setHarvests ] = useState([]);

    useEffect(() => {
        getListHarvests();
    }, []);

    const getListHarvests = async() => {

        const token = localStorage.getItem("token");

        const axiosConfig = {
            headers: {
                authorization: token,
            }
        };

        try {
            const response = await axios.get(`${baseUrl}/harvests/all`, axiosConfig);
            setHarvests(response.data)
        } catch(error) {
            console.log(error)
        };
    };

    const goToRegisterHarvestPage = (mill_id) => {
        history.push(`/harvests/${mill_id}/register`)
    };

    const goToRegisterFarmPage  = (harvest_id) => {
        history.push(`/farms/${harvest_id}/register`)
    }
    
    return (
        <div>
            <button onClick={goToRegisterHarvestPage}>Voltar</button>
            <h3>Lista de Safras Cadastradas</h3>
            <p>Página para ver todas as safras cadastradas</p>

            <div>
                <ul>
                    {harvests.length === 0 && <div>Carregando...</div>}
                    {harvests && harvests.map(harvest => {
                        return (
                            <li key={harvest.id}>
                                <p>Id: {harvest.id} </p>
                                <p>Id da Usina: {harvest.mill_id} </p>
                                <p>Início da colheita: {harvest.start_date} </p>
                                <p>Fim da colheita: {harvest.end_date} </p>
                                <button onClick={() => goToRegisterFarmPage(harvest.id)}>Cadastrar Fazenda</button>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
};

export default GetAllHarvests;