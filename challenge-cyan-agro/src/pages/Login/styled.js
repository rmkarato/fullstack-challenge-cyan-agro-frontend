import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -160px;
`;

export const Title = styled.h3`
    font-family: Poppins;
    padding: 10px;
    color: #8EA604;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Label = styled.label`
    padding: 0 10px;
`;

export const Input = styled.input`
    padding: 6px 20px;
    margin: 8px 0;
    box-sizing: border-box;
    border-radius: 4px;
    outline: none;
    border: none;
    ::-webkit-input-placeholder { 
        color: #ced4da;
        font-size: 1.2rem;
    }
    :focus {
        border: 1px solid #8EA604;
    }
`;

export const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const ButtonRegister = styled.button`
    padding: 5px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: opacity 0.2s;
    :hover {
        opacity: 0.6;
        color: #8EA604;
    }
`;

export const ButtonSignup = styled.button`
    text-decoration: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    border-bottom: 1px solid #1F363D;
    margin: 10px 10px;
    font-size: 1.2rem;
`;