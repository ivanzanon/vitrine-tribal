import styled from 'styled-components';
import { lighten } from 'polished';

export const PageContainer = styled.main`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    max-width: 135rem;

    color: ${props => props.theme.colors.primary};

    .main-container {
        width: 100%;
        height: 500rem;

        display: flex;
        align-items: center;
        flex-direction: column;

        background: 
            linear-gradient(
                ${props => props.theme.colors.backgroundDarker}, 
                ${props => props.theme.colors.backGround});

        .list-of-classes {
            width: 80%;
            margin-left: 5rem;
        }
    }
`;