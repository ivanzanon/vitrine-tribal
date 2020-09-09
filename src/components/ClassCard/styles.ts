import styled from 'styled-components';

export const Arcticle = styled.article`

    width: 100%;
    height: 35rem;

    border-style: solid;
    border-radius: 0.8rem;
    border-width: 0.2rem;
    border-color: ${(props) => props.theme.colors.backgroundDarker};

    box-shadow: 0px 4px 4px rgba(10, 10, 10, 0.25);

    margin-top: 2rem;

    display: grid;
    grid-template-columns: 3fr 1fr;
    grid-template-rows: 20% 30% 50%;
    grid-template-areas: "title title"
                         "teacher infos"
                         "main infos";

`;

export const ClassName = styled.header`

    display: flex;
    align-items: center;
    justify-content: center;

    grid-area: title;    
`;

export const Teacher = styled.section`
    grid-area: teacher;

    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    img {
        height: 100%;
        margin: 2rem;
        border-radius: 100px;
    }
`;

export const Main = styled.section`
    grid-area: main;

    padding: 2rem;
`;

export const Infos = styled.aside`
    grid-area: infos;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    justify-content: space-between;

    margin: 4rem 2rem 4rem 2rem;

    a {
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
    }
`;
