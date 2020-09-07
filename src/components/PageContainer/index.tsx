import styled from "styled-components";

export const PageContainer = styled.main`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    max-width: 135rem;

    color: ${props => props.theme.colors.primary};

`;