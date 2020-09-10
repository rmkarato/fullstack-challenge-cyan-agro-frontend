import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: -250px;
`;

export const Title = styled.h3`
    font-family: Poppins;
    padding: 10px;
    color: #8EA604;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Subtitle = styled.p`
    font-family: Poppins;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Ul = styled.ul`
    list-style: none;
`;

export const Grid = styled.section`
    display: flex;
    flex-wrap: wrap;
    max-width: 100%;
    margin: auto;
    align-items: center;
    justify-content: center;
`;

export const Card = styled.li`
    background-color: #FFFFFF;
    box-shadow: 0 0 2px;
    border-radius: 8px;
    margin: 10px;
    padding: 10px;
    line-height: 16px;
    border: none;

    :hover {
        box-shadow: 0 0 6px white;
        transition: 200ms;
    }
`;

export const TextCard = styled.p`
    padding: 5px;
`;

export const ButtonBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
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

export const ButtonView = styled.button`
    text-decoration: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
    border-bottom: 1px solid #1F363D;
    margin: 10px 10px;
    font-size: 1.2rem;
`;