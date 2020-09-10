import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import useProtectedPage from "../../hooks/useProtectedPage";
import PageHeader from "../../components/PageHeader";
import { MainContainer, Title, Label, Input, ButtonBox, ButtonRegister, ButtonView } from "./styled";

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

    return (
        <div>
            <PageHeader title="Header Page" />

            <MainContainer>
                <ButtonView onClick={goToListMillsPage}>Ver Usinas Cadastradas</ButtonView>
                <Title>Registro - Usina</Title>
                <div>

                    <div>
                        <Label htmlFor="name">Nome*</Label>
                        <Input
                            required
                            type="text"
                            placeholder="Insira o nome da usina"
                            name="name"
                            value={name}
                            onChange={handleUpdateName}
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

export default RegisterMill;