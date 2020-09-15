import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

import useProtectedPage from "../../hooks/useProtectedPage";
import PageHeader from "../../components/PageHeader";
import { MainContainer, Title, Label, Input, ButtonBox, ButtonRegister, ButtonView } from "./styled";

const baseUrl =
    "http://ec2-54-159-25-92.compute-1.amazonaws.com";

function RegisterField() {
    useProtectedPage();
    const { farm_id } = useParams();

    let history = useHistory();

    const [gpsCoordinates, setGpsCoordinates] = useState();
    // eslint-disable-next-line
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
            gpsCoordinates: gpsCoordinates
        }

        try {
            const response = await axios.post(`${baseUrl}/fields/${farm_id}/register`, body, axiosConfig);
            console.log(response.data)
            alert("Talhão cadastrado com sucesso!");
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
        <div>
            <PageHeader title="Header Page" />

            <MainContainer>
                <ButtonView onClick={goToListFarmsPage}>Voltar</ButtonView>
                <ButtonView onClick={goToListFieldsPage}>Ver Talhões Cadastrados</ButtonView>
                <Title>Registro - Talhão</Title>
                <div>

                    <div>
                        <Label htmlFor="gpsCoordinates">Coordenadas GPS*</Label>
                        <Input
                            required
                            type="text"
                            placeholder="Insira as coordenadas"
                            name="gpsCoordinates"
                            value={gpsCoordinates}
                            onChange={handleUpdateGpsCoordinates}
                        />
                    </div>

            
                    <ButtonBox>
                        <ButtonRegister onClick={buttonRegister}>Cadastrar</ButtonRegister>
                    </ButtonBox>
                </div>
            </MainContainer>
        </div>
    )
};

export default RegisterField;