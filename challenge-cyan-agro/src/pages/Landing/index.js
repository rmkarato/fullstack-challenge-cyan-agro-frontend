import React from "react";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";

function Landing() {
    let history = useHistory();

    const goToRegisterMill = () => {
        history.push("/mills/register")
    }

    return (
        <div id="page-container" className="container">
            <PageHeader title="Header Page" />
            <button onClick={goToRegisterMill}>Cadastrar Usina</button>
        </div>
    )
}

export default Landing;