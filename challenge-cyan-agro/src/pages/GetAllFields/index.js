import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import useProtectedPage from "../../hooks/useProtectedPage";

const baseUrl =
    "http://localhost:3003";

function GetAllFields() {
    useProtectedPage();

    let history = useHistory();

    const [ fields, setFields ] = useState([]);

    useEffect(() => {
        getListFields();
    }, []);

    const getListFields = async() => {
        const token = localStorage.getItem("token");

        const axiosConfig = {
            headers: {
                authorization: token,
            }
        };

        try {
            const response = await axios.get(`${baseUrl}/fields/all`, axiosConfig);
            setFields(response.data);
            console.log(response.data);
        } catch(error) {
            console.log(error);
        }
    }

    const goToRegisterFieldsPage = (farm_id) => {
        history.push(`/fields/${farm_id}/register`)
    }

    const goToHomePage = () => {
        history.push("/")
    }

    return (
        <div>
            <button onClick={goToRegisterFieldsPage}>Voltar</button>
            <button onClick={goToHomePage}>Home</button>
            <h3>Lista de Talhões Cadastrados</h3>
            <p>Página para ver todos os talhões cadastrados</p>
            <div>
                <ul>
                    {fields.length === 0 && <div>Carregando...</div>}
                    {fields && fields.map(field => {
                        return (
                            <li key={field.id}>
                                <p>Id: {field.id}</p>
                                <p>Id da Fazenda: {field.farm_id}</p>
                                <p>Coordenadas: {fields.gps_coordinates}</p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
};

export default GetAllFields;