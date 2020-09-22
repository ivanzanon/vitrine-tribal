import styled, { css } from 'styled-components';

interface ButtonProps {
    height?: string;
    width?: string;
    color?: string;
}

export const Button = styled.input<ButtonProps>`

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

    ${({ color }) => {
    if (color === 'yay') { return (css`background: ${({ theme }) => theme.colors.primaryButton};`); }
    if (color === 'nay') {
      return (
        css`background: none; 
            border: 1px solid ${({ theme }) => theme.colors.secondaryDark}; 
            color: ${({ theme }) => theme.colors.secondaryDark};`
      );
    }
    return (css`background: ${({ theme }) => theme.colors.primary}`);
  }}
   
    text-decoration: none;
    cursor: pointer;

    img {
        height: 2rem;
        margin-right: 1rem;
    }
`;
