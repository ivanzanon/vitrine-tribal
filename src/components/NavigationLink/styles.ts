import { shade } from 'polished';
import styled from 'styled-components';

interface ButtonProps {
    height?: string;
    width?: string;
    color?: string;
}

export const StyledLink = styled.div<ButtonProps>`
    a {
        height: ${(props) => (props.height ? props.height : 5)}rem;
        width: ${(props) => (props.width ? props.width : 15)}rem;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        border: 0;
        outline: 0;

        font-family: ${(props) => props.theme.fonts.fontText};
        color: ${(props) => props.theme.colors.primaryLight};
        font-size: 2rem;

        border-radius: 8px;

        background-color: ${(props) => (props.color ? props.color : props.theme.colors.primaryButton)};

        text-decoration: none;

        :hover {
        background-color: ${(props) => (props.color ? shade(0.1, props.color) : shade(0.1, props.theme.colors.primaryButton))};
        }
    }
`;
