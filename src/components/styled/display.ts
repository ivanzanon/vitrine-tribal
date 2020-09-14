import styled from 'styled-components';

interface TextProps {
    size: string;
    margin?: string;
    fontDark?: boolean;
}

export const Text = styled.h1<TextProps>`

    font-family: ${(props) => props.theme.fonts.fontText};

    color: ${({ theme, fontDark }) => (fontDark ? theme.colors.backgroundDarker : theme.colors.primaryLight)};

    font-size: ${(props) => props.size}rem;
    margin: ${(props) => props.margin};

    font-weight: 400;
`;

export const Title = styled.h1<TextProps>`

    font-family: ${(props) => props.theme.fonts.fontMainTitle};
    color: ${(props) => props.theme.colors.title};

    font-size: ${(props) => props.size}rem;
    margin: ${(props) => props.margin};

    font-weight: 400;

`;

export const SubTitle = styled.h1<TextProps>`
    font-family: ${(props) => props.theme.fonts.fontText};
    color: ${(props) => props.theme.colors.primaryLight};

    font-size: ${(props) => props.size};
    margin: ${(props) => props.margin};

`;

export const TextAlert = styled(Text)<TextProps>`
    color: ${({ theme }) => theme.colors.secondaryLight};
    font-weight: 400;

    font-size: ${({ size }) => size};
    margin: ${({ margin }) => margin};
`;

export const Button = styled.a`

    height: 5rem;
    width: 100%;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    border-radius: 8px;

    background-color: ${(props) => props.theme.colors.primaryButton};

    text-decoration: none;

    img {
        height: 2rem;
        margin-right: 1rem;
    }

`;
