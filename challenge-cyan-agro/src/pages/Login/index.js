import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import { MainContainer, Title, Label, Input, ButtonBox, ButtonRegister, ButtonSignup } from "./styled";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const baseUrl =
    "http://localhost:3003";

function Login() {
    let history = useHistory();
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);

    const handleUpdateEmail = (event) => {
        setEmail(event.target.value);
    };
    
    const handleUpdatePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleLogin = async(event) => {
        event.preventDefault();

        const body = {
            email: email,
            password: password,
        };

        try {
            const response = await axios.post(`${baseUrl}/user/login`, body);
            console.log(response);
            window.localStorage.setItem("token", response.data.token);
            alert("Usuário logado.");
            history.push("/");
        } catch (e) {
            alert("Falha no login");
            console.log(e);
        }
    };

    const goToSignUpPage = () => {
        history.push("/user/signup");
    };

    return (
        <div>
            <PageHeader title="Header Page" />

            <MainContainer>
                <div>
                    <Title>Entrar</Title>

                    <div>
                        <Label htmlFor="email">E-mail</Label>
                        <Input                 
                            required
                            type="email"
                            placeholder="Insira seu e-mail"
                            name="email"
                            value={email}
                            onChange={handleUpdateEmail}
                        />
                    </div>

                    <div>
                        <Label htmlFor="password">Senha</Label>
                        <Input
                            required
                            placeholder="email@email.com"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            variant="outlined"
                            color="secondary"
                            value={password}
                            onChange={handleUpdatePassword}
                            InputProps={{
                                endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    onMouseDown={handleMouseDownPassword}
                                    >
                                    {showPassword ? <Visibility /> : <VisibilityOff />}
                                    </IconButton>
                                </InputAdornment>
                                ),
                            }}
                        />
                    </div>

                    <ButtonBox>
                        <ButtonSignup onClick={goToSignUpPage}>Não possui uma conta? Cadastrar-se.</ButtonSignup>
                        <ButtonRegister onClick={handleLogin}>Entrar</ButtonRegister>
                    </ButtonBox>
                    </div>
            </MainContainer>
        </div>
    )
}

export default Login;