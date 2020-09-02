import styled from "styled-components";

export const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 135rem;

    display: flex;
    align-items: center;

    flex-direction: column;

    color: ${props => props.theme.colors.primaryLight};
`;

export const MainContainer = styled.main`
    height: 156.7rem;
    width: 100%;

    background: 
        linear-gradient(
            ${props => props.theme.colors.backgroundDarker}, 
            ${props => props.theme.colors.backGround});

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
    width: 100%;
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
        font-family: ${props => props.theme.fonts.fontSubTitle}, sans-serif;
    }
`;

export const ItemConteiner = styled.section`

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

`;