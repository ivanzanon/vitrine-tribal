import styled, { css } from 'styled-components';

interface HeaderProps{
    size: string;
}

export const Header = styled.header<HeaderProps>`
    width: 100%;

    background-color: ${(props) => props.theme.colors.backgroundDarker};

    ${({ size }) => {
    if (size === 'large') {
      return (css`height: 26rem;`);
    }
    return (css`height: 14rem;`);
  }}

    .title-container {
        width: 90%;
        height: 80%;
        margin: 0 auto;
        display: flex;

        align-items: center;
        padding: 1.6rem 0;

        img {
            ${({ size }) => {
    if (size === 'large') {
      return (css`width: 20rem;
                            margin-top: 0.2rem;`);
    }
    return (css`width: 10rem;
                            margin-top: 0.1rem;`);
  }}
        }

        .title {
            margin-top: 3rem;
        }
    }

    .bottom-container {
        width: 100%;
        height: 2rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        .menu-container {

            background-color: ${(props) => props.theme.colors.backgroundDarker};
            color: ${(props) => props.theme.colors.primary};

            height: 100%;
            width: 40%;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            margin-right: 3rem;

            font-size: 3rem;
            font-weight: 400;
            font-family: ${({ theme }) => theme.fonts.fontSubTitle}, sans-serif;

            ${({ size }) => {
    if (size === 'small') {
      return (css`margin-top: -10rem;`);
    }
    return (css`margin-top: 0;`);
  }}

            a {
                text-decoration: none;
                color: ${(props) => props.theme.colors.primary};
            }

            a .login-icon {
                height: 2.8rem;
                fill: ${(props) => props.theme.colors.primary};
                stroke: ${(props) => props.theme.colors.primary};
            }
        }
    }
`;

export const BottomContainer = styled.div`
`;

export const MenuContainer = styled.div`

`;
