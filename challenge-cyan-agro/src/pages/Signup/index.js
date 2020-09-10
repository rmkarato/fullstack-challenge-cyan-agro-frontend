import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import PageHeader from "../../components/PageHeader";
import { MainContainer, Title, Form, Label, Input, ButtonBox, ButtonRegister, ButtonSignup } from "./styled";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const baseUrl =
    "http://localhost:3003";

function Signup() {
    let history = useHistory();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const handleMouseDownPassword = () => setShowPassword(!showPassword);
    
    const handleUpdateName = (event) => {
        setName(event.target.value);
    };

    const handleUpdateEmail = (event) => {
        setEmail(event.target.value);
    };
    
    const handleUpdatePassword = (event) => {
        setPassword(event.target.value);
    };

    const handleUpdateConfirmPassword = (event) => {
        setConfirmPassword(event.target.value);
    };
    
    const buttonSignUp = async(event) => {
        event.preventDefault();

        const body = {
            name: name,
            email: email,
            password: password,
        };
        
        try {
            if (body.password === confirmPassword) {
                axios
                .post(`${baseUrl}/user/signup`, body)
                .then((response) => {
                    console.log(response);
                    window.localStorage.setItem("token", response.data.token);
                    alert("Usuário criado com sucesso.");
                    history.push("/user/login");
                })
                .catch((e) => {
                    alert("Falha no login");
                    console.log(e);
                });
            } else {
                alert("Senhas não conferem!");
            }
        } catch(e) {
            alert("Falha no cadastro.")
            console.log(e)
        }
    };

    const goToLoginPage = () => {
        history.push("/user/login");
    };

    return (
        <div>
            <PageHeader title="Header Page" />
            
                <MainContainer>
                    <Form>
                        <Title>Cadastrar Usuário</Title>

                        <div>
                            <Label htmlFor="name">Nome*</Label>
                            <Input
                                required
                                type="text"
                                placeholder="Insira seu nome"
                                name="name"
                                value={name}
                                onChange={handleUpdateName}
                            />
                        </div>
                    
                        <div>
                            <Label htmlFor="email">Email*</Label>
                            <Input
                                required
                                type="email"
                                placeholder="email@email.com"
                                name="email"
                                value={email}
                                onChange={handleUpdateEmail}
                            />
                        </div>
                        
                        <div>
                            <Label htmlFor="password">Senha*</Label>
                            <Input
                                required
                                placeholder="Mínimo de 6 caracteres"
                                pattern="[A-Za-z0-9 ]{6,}"
                                type={showPassword ? "text" : "password"}
                                variant="outlined"
                                color="secondary"
                                name="password"
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
                        
                        <div>
                            <Label htmlFor= "confirmPassword">Confirmar Senha*</Label>
                            <Input
                                required
                                placeholder="Confirme a senha anterior"
                                pattern="[A-Za-z0-9 ]{6,}"
                                type={showPassword ? "text" : "password"}
                                variant="outlined"
                                color="secondary"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={handleUpdateConfirmPassword}
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
                            <ButtonSignup onClick={goToLoginPage}>Já possui uma conta? Entrar.</ButtonSignup>
                            <ButtonRegister onClick={buttonSignUp}>Criar Conta</ButtonRegister>
                        </ButtonBox>
                        </Form>
                </MainContainer>
        </div>

    );
};

export default Signup;