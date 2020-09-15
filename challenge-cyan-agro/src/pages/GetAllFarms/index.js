import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import useProtectedPage from "../../hooks/useProtectedPage";
import PageHeader from "../../components/PageHeader";
import { MainContainer, Title, Subtitle, Ul, Grid, Card, TextCard, ButtonBox, ButtonRegister, ButtonView } from "./styled";

const baseUrl =
    "http://ec2-54-159-25-92.compute-1.amazonaws.com";

    
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
            <PageHeader title="Header Page" />

            <MainContainer>
                <ButtonView onClick={goToRegisterFarmPage}>Voltar</ButtonView>
                <Title>Lista de Fazendas Cadastradas</Title>
                <Subtitle>Página para ver todas as fazendas cadastradas</Subtitle>

                <div>
                    <Ul>
                        {farms.length === 0 && <div>Carregando...</div>}
                        <Grid>
                            {farms && farms.map(farm => {
                                return (
                                    <Card key={farm.id}>
                                        <TextCard><b>Id:</b> {farm.id} </TextCard>
                                        <TextCard><b>Nome da Fazenda:</b> {farm.name} </TextCard>
                                        <TextCard><b>Data de Criação:</b> {farm.createdAt}</TextCard>
                                        <ButtonBox>
                                            <ButtonRegister onClick={() => goToRegisterFieldsPage(farm.id)}>Cadastrar Talhão</ButtonRegister>
                                        </ButtonBox>
                                    </Card>
                                )
                            })}
                        </Grid>
                    </Ul>
                </div>
            </MainContainer>
        </div>
    )
};

export default GetAllFarms;