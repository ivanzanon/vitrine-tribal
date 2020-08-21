import styled, {css} from "styled-components";

interface HeaderProps{
    size: string;
}

export const Header = styled.header<HeaderProps>`
    width: 100vw;

    ${({ size }) => {
            if (size === 'large') {
                return(css`height: 26rem;`);
            } else {
                return(css`height: 10rem;`);
            }
        }}

    background-color: ${props => props.theme.colors.backgroundBase};
    color: ${props => props.theme.colors.primary};
`;

export const TitleContainer = styled.div`
    width: 90%;
    height: 90%;
    margin: 0 auto;
    display: flex;

    align-items: center;
    padding: 1.6rem 0;

    img {
        width: 20rem;
        margin-top: 0.1rem;
    }
`;

export const Title = styled.h1`
    font-size: 8rem;
    font-weight: 100;
    font-family: ${'Special Elite'}, sans-serif;
    color: ${props => props.theme.colors.title};

    margin-left: -7.5rem;
    margin-top: 3rem;
`;

export const BottomContainer = styled.div`
    width: 100%;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

export const MenuContainer = styled.div`
    height: 100%;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-right: 3rem;

    font-size: 3rem;
    font-weight: 400;
    font-family: 'Dosis', sans-serif;

    a {
        text-decoration: none;
        color: ${props => props.theme.colors.primary};
    }

    a .login-icon {
        height: 2.8rem;
        fill: ${props => props.theme.colors.primary};
        stroke: ${props => props.theme.colors.primary};
    }
`;