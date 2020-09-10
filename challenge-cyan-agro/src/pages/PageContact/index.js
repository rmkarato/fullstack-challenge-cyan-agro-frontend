import React from 'react';

import PageHeader from "../../components/PageHeader";
import { MainContainer, Title, Subtitle } from "./styled";

function PageContact() {
    return (
        <div>
            <PageHeader title="Header Page" />
            <MainContainer>
                <Title>Contato</Title>
                <Subtitle>Em breve</Subtitle>
            </MainContainer>
        </div>
    );
};

export default PageContact;