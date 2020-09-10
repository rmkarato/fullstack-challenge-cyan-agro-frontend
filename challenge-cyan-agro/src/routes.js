import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import DocumentTitle from "react-document-title";

import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import RegisterMill from "./pages/RegisterMill";
import GetAllMills from "./pages/GetAllMills";
import RegisterHarvest from "./pages/RegisterHarvest";
import GetAllHarvests from "./pages/GetAllHarvests";
import RegisterFarm from "./pages/RegisterFarm";
import GetAllFarms from "./pages/GetAllFarms";
import RegisterField from "./pages/RegisterFields";
import GetAllFields from "./pages/GetAllFields";

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>

                <Route exact path="/">
                    <DocumentTitle title="Cyan Agro - Home">
                        <Landing />
                    </DocumentTitle>
                </Route>

                <Route exact path="/user/signup">
                    <DocumentTitle title="Cyan Agro - SignUp">
                        <Signup />
                    </DocumentTitle>
                </Route>

                <Route exact path="/user/login">
                    <DocumentTitle title="Cyan Agro - Login">
                        <Login />
                    </DocumentTitle>
                </Route>

                <Route exact path="/mills/register">
                    <DocumentTitle title="Cyan Agro - Cadastrar Usina">
                        <RegisterMill />
                    </DocumentTitle>
                </Route>

                <Route exact path="/mills/all">
                    <DocumentTitle title="Cyan Agro - Lista de Usinas">
                        <GetAllMills />
                    </DocumentTitle>
                </Route>

                <Route exact path="/harvests/:mill_id/register">
                    <DocumentTitle title="Cyan Agro - Cadastrar Safra">
                        <RegisterHarvest />
                    </DocumentTitle>
                </Route>

                <Route exact path="/harvests/all">
                    <DocumentTitle title="Cyan Agro - Lista de Safras">
                        <GetAllHarvests />
                    </DocumentTitle>
                </Route>

                <Route exact path="/farms/:harvest_id/register">
                    <DocumentTitle title="Cyan Agro - Cadastrar Fazenda">
                        <RegisterFarm />
                    </DocumentTitle>
                </Route>

                <Route exact path="/farms/all">
                    <DocumentTitle title="Cyan Agro - Lista de Fazendas">
                        <GetAllFarms />
                    </DocumentTitle>
                </Route>

                <Route exact path="/fields/:farm_id/register">
                    <DocumentTitle title="Cyan Agro - Cadastrar Talhão">
                        <RegisterField />
                    </DocumentTitle>
                </Route>

                <Route exact path="/fields/all">
                    <DocumentTitle title="Cyan Agro - Lista de Talhões">
                        <GetAllFields />
                    </DocumentTitle>
                </Route>

            </Switch>
        </BrowserRouter>
    );
};

export default Router;