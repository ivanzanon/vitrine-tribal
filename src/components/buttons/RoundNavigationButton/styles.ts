import styled, { css } from 'styled-components';

interface ButtonProps {
    height?: string;
    width?: string;
    color?: string;
}

export const LinkContainer = styled.div<ButtonProps>`

    a {
      height: ${({ height }) => (height || 4)}rem;
      width: ${({ width }) => (width || 4)}rem;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      border: 0;
      outline: 0;
      border-radius: 100px;

      text-decoration: none;
        border-radius: 100px;

        ${({ color }) => {
    if (color === 'yay') {
      return (css`background: ${({ theme }) => theme.colors.primaryButton};`);
    }
    if (color === 'nay') {
      return (
        css`background: none; 
            border: 1px solid ${({ theme }) => theme.colors.secondaryDark}; 
            color: ${({ theme }) => theme.colors.secondaryDark};`
      );
    }
    return (css`background: ${({ theme }) => theme.colors.primary};`);
  }}

    img {
      height: 2.5rem;
    }
  }
`;
