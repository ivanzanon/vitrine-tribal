import styled from 'styled-components';

const Main = styled.main`
    width: 100%;
    height: 500rem;

    display: flex;
    align-items: center;
    flex-direction: column;

    background: 
        linear-gradient(
            ${(props) => props.theme.colors.backgroundDarker}, 
            ${(props) => props.theme.colors.backGround});

`;

export default Main;
