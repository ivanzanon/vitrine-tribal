import styled from 'styled-components';
import { shade } from 'polished';

interface ButtonProps {
    height?: string;
    width?: string;
    color?: string;
};

export const Button = styled.input<ButtonProps>`

    height: ${props => props.height ? props.height : 5 }rem;
    width: ${props => props.width ? props.width : 15}rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    border: 0;
    outline: 0;

    font-family: ${props => props.theme.fonts.fontText};
    color: ${props => props.theme.colors.primaryLight};
    font-size: 2rem;

    border-radius: 8px;

    background-color: ${props => props.color ? props.color : props.theme.colors.primaryButton};

    text-decoration: none;
    cursor: pointer;

    img {
        height: 2rem;
        margin-right: 1rem;
    }

    :hover {
        background-color: ${props => props.color ? 
                                        shade( 0.1, props.color ) : 
                                        shade( 0.1, props.theme.colors.primaryButton) };
    }

`;