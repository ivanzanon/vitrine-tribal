import styled from 'styled-components';

export const LoginContainer = styled.div`

    width: 100vw;
    height: 100vh;

    max-width: 135rem;
    min-height: 5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: 
        linear-gradient(
            ${(props) => props.theme.colors.backgroundDarker}, 
            ${(props) => props.theme.colors.backGround});

    .main {
        height: 90vh;
        width: 80%;

        max-height: 55rem;

        display: flex;
        align-items: center;
        justify-content: center;

        .logo-container {
            width: 50%;
            height: 100%;
            border: 2px solid ${(props) => props.theme.colors.primary};
            border-radius: 8px 0px 0px 8px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            img {
                height: 30rem;
            }

            h1 {
                width: 50%;
                text-align: center;
                margin-left: -2rem;
            }
        }

        .form-container {
            width: 50%;
            height: 100%;

            background: ${(props) => props.theme.colors.primary};

            border: 2px solid ${(props) => props.theme.colors.primary};
            border-radius: 0px 8px 8px 0px;

            padding: 4rem;

            .fields {
                height: 30vh;
                margin-top: 2rem;

                display: flex;
                align-items: flex-start;
                justify-content: space-around;
                flex-direction: column;
            }

            .buttons {
                display: flex;
                align-items: center;
                justify-content: space-around;
                margin-top: 6rem;
            }

            footer {
                display: flex;
                align-items: center;
                justify-content: space-around;
                margin-top: 4rem;
            }
        }
    }

`;
