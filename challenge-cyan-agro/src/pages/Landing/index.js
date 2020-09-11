import React from "react";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import { MainContainer, Title, Subtitle, ButtonBox, ButtonRegister, Footer, Name } from "./styled";

function Landing() {
    let history = useHistory();

    const goToRegisterMill = () => {
        history.push("/mills/register")
    };

    const goToGetAllMills = () => {
        history.push("/mills/all")
    };

    return (
        <div>
            <PageHeader title="Header Page" />

            <MainContainer>
                
                <Title>Banco de Dados</Title>
                <Subtitle>Cadastro de unidades de usinas de cana-de-açúcar</Subtitle>
                <ButtonBox>
                    <ButtonRegister onClick={goToRegisterMill}>Cadastrar Nova Usina</ButtonRegister>
                    <ButtonRegister onClick={goToGetAllMills}>Ver Usinas Cadastradas</ButtonRegister>
                </ButtonBox>
                
            </MainContainer>
            <Footer>
                <Name>Por Renata Mitsue Karato | 11 99763-7438 | rmkarato@gmail.com</Name>
            </Footer>
        </div>
    )
}

export default Landing;