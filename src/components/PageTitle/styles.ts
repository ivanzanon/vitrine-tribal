import styled from 'styled-components';

export const Title = styled.title`

    width: 100%;

    display: flex;
    align-items: center;
    justify-content: flex-start;

    background-color: transparent;

    h1 {

        font-size: 8rem;
        font-family: ${'Special Elite'}, sans-serif;
        color: ${props => props.theme.colors.title};

        margin-left: 10rem;
        margin-top: 8rem;

    }

`;