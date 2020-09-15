import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import useProtectedPage from "../../hooks/useProtectedPage";
import PageHeader from "../../components/PageHeader";
import { MainContainer, Title, Subtitle, Ul, Grid, Card, TextCard, ButtonView } from "./styled";


const baseUrl =
    "http://ec2-54-159-25-92.compute-1.amazonaws.com";

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

    return (
        <div>
            <PageHeader title="Header Page" />

            <MainContainer>
                <ButtonView onClick={goToRegisterFieldsPage}>Voltar</ButtonView>
                <Title>Lista de Talhões Cadastrados</Title>
                <Subtitle>Página para ver todos os talhões cadastrados</Subtitle>
                <div>
                    <Ul>
                        {fields.length === 0 && <div>Carregando...</div>}
                        <Grid>
                            {fields && fields.map(field => {
                                return (
                                    <Card key={field.id}>
                                        <TextCard><b>Id:</b> {field.id}</TextCard>
                                        <TextCard><b>Id da Fazenda:</b> {field.farm_id}</TextCard>
                                        <TextCard><b>Coordenadas:</b> {field.gpsCoordinates}</TextCard>
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

export default GetAllFields;