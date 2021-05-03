import styled, { css } from 'styled-components';

interface ButtonProps {
    height?: string;
    width?: string;
    color?: string;
}

export const RoundButton = styled.a<ButtonProps>`

    height: ${({ height }) => (height || 4)}rem;
    width: ${({ width }) => (width || 4)}rem;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    
    border: 0;
    outline: 0;

    font-family: ${({ theme }) => theme.fonts.fontText};
    color: ${({ theme }) => theme.colors.primaryLight};
    font-size: 2rem;

    border-radius: 100px;

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
        height: 2.5rem;
    }
`;
