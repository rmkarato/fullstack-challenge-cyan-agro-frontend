import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import useProtectedPage from "../../hooks/useProtectedPage";
import PageHeader from "../../components/PageHeader";
import { MainContainer, Title, Subtitle, Ul, Grid, Card, TextCard, ButtonBox, ButtonRegister, ButtonView } from "./styled";

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
        <div>
            <PageHeader title="Header Page" />

            <MainContainer>
                <ButtonView onClick={goToRegisterMillPage}>Voltar</ButtonView>
                <Title> Lista de Usinas Cadastradas </Title>
                <Subtitle>Página para ver todas as usinas cadastradas</Subtitle>

                <div>
                    <Ul>
                        {mills.length === 0 && <div>Carregando...</div>}
                        <Grid>
                            {mills && mills.map(mill => {
                                return (
                                    <Card key={mill.name}>
                                        <TextCard><b>Id:</b> {mill.id} </TextCard>
                                        <TextCard><b>Nome da Usina:</b> {mill.name} </TextCard>
                                        <TextCard><b>Data de Criação:</b> {mill.createdAt}</TextCard>
                                        <ButtonBox>
                                            <ButtonRegister onClick={() => goToRegisterHarvestPage(mill.id)}>Cadastrar Nova Safra</ButtonRegister>
                                        </ButtonBox>                                
                                    </Card>
                                )
                            })}
                        </Grid>
                    </Ul>
                </div>
            </MainContainer>
        </div>
    );
};

export default GetAllMills;