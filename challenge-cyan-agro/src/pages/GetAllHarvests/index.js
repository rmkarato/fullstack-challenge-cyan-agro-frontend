import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import useProtectedPage from "../../hooks/useProtectedPage";
import PageHeader from "../../components/PageHeader";
import { MainContainer, Title, Subtitle, Ul, Grid, Card, TextCard, ButtonBox, ButtonRegister, ButtonView } from "./styled";

const baseUrl =
    "http://ec2-54-159-25-92.compute-1.amazonaws.com";

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
            <PageHeader title="Header Page" />

            <MainContainer>
                <ButtonView onClick={goToRegisterHarvestPage}>Voltar</ButtonView>
                <Title>Lista de Safras Cadastradas</Title>
                <Subtitle>Página para ver todas as safras cadastradas</Subtitle>

                <div>
                    <Ul>
                        {harvests.length === 0 && <div>Carregando...</div>}
                        <Grid>
                            {harvests && harvests.map(harvest => {
                                return (
                                    <Card key={harvest.id}>
                                        <TextCard><b>Id:</b> {harvest.id} </TextCard>
                                        <TextCard><b>Id da Usina:</b> {harvest.mill_id} </TextCard>
                                        <TextCard><b>Início da colheita:</b> {harvest.start_date} </TextCard>
                                        <TextCard><b>Fim da colheita:</b> {harvest.end_date} </TextCard>
                                        <ButtonBox>
                                            <ButtonRegister onClick={() => goToRegisterFarmPage(harvest.id)}>Cadastrar Fazenda</ButtonRegister>
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

export default GetAllHarvests;