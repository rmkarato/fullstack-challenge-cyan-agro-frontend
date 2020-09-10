import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

import useProtectedPage from "../../hooks/useProtectedPage";
import PageHeader from "../../components/PageHeader";

const baseUrl =
    "http://localhost:3003";

function RegisterField() {
    useProtectedPage();
    const { farm_id } = useParams();

    let history = useHistory();

    const [gpsCoordinates, setGpsCoordinates] = useState("");
    const [newToken, setNewToken] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setNewToken(token)
    }, []);

    const handleUpdateGpsCoordinates = (event) => {
        setGpsCoordinates(event.target.value);
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
            gps_coordinates: gpsCoordinates
        }

        try {
            const response = await axios.post(`${baseUrl}/fields/${farm_id}/register`, body, axiosConfig);
            console.log(response.data)
            alert("Talhão cadastradao com sucesso!");
            history.push("/fields/all");
        } catch(e) {
            alert("Falha ao cadastrar talhão.");
            console.log(e);
        }
    }

    const goToListFarmsPage = () => {
        history.push("/farms/all")
    };

    const goToListFieldsPage = () => {
        history.push("/fields/all")
    }

    return (
        <div id="page-container" className="container">
            <PageHeader title="Header Page" />
            <button onClick={goToListFarmsPage}>Voltar</button>
            <button onClick={goToListFieldsPage}>Ver Talhões Cadastrados</button>
            <h3>Registro - Talhão</h3>
            <div>

                <div>
                    <label htmlFor="gpsCoordinates">Coordenadas GPS*</label>
                    <input
                        required
                        type="text"
                        placeholder="Insira as coordenadas"
                        name="gpsCoordinates"
                        value={gpsCoordinates}
                        onChange={handleUpdateGpsCoordinates}
                    />
                </div>

            </div>
            <button onClick={buttonRegister}>Cadastrar</button>
        </div>
    )
};

export default RegisterField;