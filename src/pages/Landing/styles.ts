import styled from "styled-components";

import {lighten} from 'polished';

export const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;

    flex-direction: column;

    color: ${props => props.theme.colors.primary};
`;

export const MainContainer = styled.main`
    height: 156.7rem;
    width: 100vw;

    background: 
        linear-gradient(
            ${props => props.theme.colors.backgroundBase}, 
            ${props => lighten(0.11, props.theme.colors.backgroundBase)});

    h1 {
        width: 50vw;
        font-family: ${'Srisakdi'}, cursive;
        font-weight: 400;
        margin-top: 1.5rem;
        margin-left: 10rem;
        margin-bottom: 2.5rem
    };
`;

export const DancersContainer = styled.div`
    height: 20vw;
    width: 100vw;
    margin-top: 0rem;

    display: flex;
    justify-content: space-between;
    flex-direction: row;
    
    img {
        height: 100%;
        opacity: 50%;
    };
`;

export const Title = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 5rem;
    margin-bottom: 2.5rem;


    h1 {
        margin: 0;
        width: auto;
        font-weight: 100;
        font-size: 5rem;
        font-family: 'Dosis', sans-serif;
    }
`;

export const ItemConteiner = styled.section`

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

`;