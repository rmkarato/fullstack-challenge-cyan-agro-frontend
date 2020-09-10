import styled from "styled-components";

import backgroundImg from "../../assets/images/landing.jpg";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -250px;
    background-image: url(${backgroundImg});
    background-position: center;
    background-size: cover;
    height: 80vh;
`;

export const Title = styled.h1`
    font-family: Poppins;
    padding: 5px;
    color: #6a994e;
    font-size: 4.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    background:rgba(245,245,245,0.7);
    margin-bottom: 20px;
`;

export const Subtitle = styled.h3`
    font-family: Poppins;
    color: #00AEEF;
    font-size: 3.6rem;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    background:rgba(245,245,245,0.7);
`;

export const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 10px;
`;

export const ButtonRegister = styled.button`
    font-size: 1.8rem;
    padding: 10px;
    margin: 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: opacity 0.2s;
    :hover {
        color: #CFE0C3;
    }
    background-color: #00AEEF;
    color: white;
`;

export const Name = styled.p`
    text-align: center;
    padding: 13px;
    font-size: 1.4rem;
`;