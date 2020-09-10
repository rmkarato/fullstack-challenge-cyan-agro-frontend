import React from 'react';

import PageHeader from "../../components/PageHeader";
import { MainContainer, Title, Subtitle } from "./styled";

function PageAbout() {
    return (
        <div>
            <PageHeader title="Header Page" />
            <MainContainer>
                <Title>Sobre a Empresa</Title>
                <Subtitle>Em breve</Subtitle>
            </MainContainer>
        </div>
    );
};

export default PageAbout;