import styled from 'styled-components';

interface ButtonProps {
    height?: string;
    width?: string;
    color?: string;
}

export const Button = styled.a<ButtonProps>`

    height: ${(props) => (props.height ? props.height : 5)}rem;
    width: ${(props) => (props.width ? props.width : 15)}rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    background-color: ${(props) => (props.color ? props.color : props.theme.colors.primaryButton)};

    text-decoration: none;

    img {
        height: 2rem;
        margin-right: 1rem;
    }

`;
