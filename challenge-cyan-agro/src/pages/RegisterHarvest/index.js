import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

import useProtectedPage from "../../hooks/useProtectedPage";
import PageHeader from "../../components/PageHeader";
import { MainContainer, Title, Label, Input, ButtonBox, ButtonRegister, ButtonView } from "./styled";

const baseUrl =
    "http://ec2-54-159-25-92.compute-1.amazonaws.com";

function RegisterHarvest() {
    useProtectedPage();
    const { mill_id } = useParams();

    let history = useHistory();

    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    // eslint-disable-next-line
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
        <div>
            <PageHeader title="Header Page" />

            <MainContainer>
                <ButtonView onClick={goToListMillsPage}>Voltar</ButtonView>
                <ButtonView onClick={goToListHarvestsPage}>Ver Safras Cadastradas</ButtonView>
                <Title>Registro - Safra</Title>
                <div>

                    <div>
                        <Label htmlFor="startDate">Data de Ínicio:</Label>
                        <Input 
                            required
                            type="text"
                            placeholder="YYYY-MM-DD"
                            name="startDate"
                            value={startDate}
                            onChange={handleUpdateStartDate}
                        />
                    </div>

                    <div>
                        <Label htmlFor="endDate">Data Final:</Label>
                        <Input 
                            required
                            type="text"
                            placeholder="YYYY-MM-DD"
                            name="endDate"
                            value={endDate}
                            onChange={handleUpdateEndDate}
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

export default RegisterHarvest;