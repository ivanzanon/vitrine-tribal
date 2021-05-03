import styled from 'styled-components';

export const Card = styled.article`
    width: 34rem;
    height: 30rem;

    border-style: solid;
    border-radius: 0.8rem;
    border-color: ${(props) => props.theme.colors.secondary};

    box-shadow: 0px 4px 4px rgba(10, 10, 10, 0.25);
    
    margin: 0rem 3rem;

`;

const Text = styled.h2`
    font-family: ${(props) => props.theme.fonts.fontText}, sans-serif;
`;

export const Title = styled(Text)`
    height: 8rem;

    display: flex;
    align-items: center;
    justify-content: space-around;

    font-size: 3rem;
    font-weight: 700;

    padding: 0.5rem;
`;

export const Teacher = styled(Text)`
    font-size: 2.5rem;
    font-weight: 400;
`;

export const Description = styled(Text)`
    font-size: 2rem;
    font-weight: 100;
`;

export const Price = styled(Text)`
    font-size: 3rem;
    font-weight: 700;
    /* color: ${(props) => props.theme.colors.secondary} */
`;

export const Date = styled(Text)`
    font-size: 3rem;
    font-weight: 400;
`;
