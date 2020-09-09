import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import DocumentTitle from "react-document-title";

import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

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


            </Switch>
        </BrowserRouter>
    );
};

export default Router;