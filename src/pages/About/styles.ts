import { lighten } from 'polished';
import styled from 'styled-components';

export const PageContainer = styled.main`
    width: 100vw;
    height: 100vh;

    display: flex;
    flex-direction: column;

    max-width: 135rem;

    color: ${(props) => props.theme.colors.primary};

    .main-container {
        width: 100%;
        height: 500rem;

        background: 
            linear-gradient(
                ${(props) => props.theme.colors.backgroundDarker}, 
                ${(props) => props.theme.colors.backGround});
    }

    .content {
        font-family: ${(props) => props.theme.fonts.fontText}, sans-serif;
        font-size: 2.8rem;

        text-align: justify;
        margin: 8rem 10rem;
    }

    .founders {
        height: 50rem;
        width: 100%;
    }

    .founders .left-teacher-info {
        height: 100%;
        
        img {
            height: 100%;
            opacity: 30%;
        }

        .left-teacher-text {
            background-color: ${(props) => props.theme.colors.openLighter};
            height: 25rem;
            width: 100%;

            display: flex;
            align-items: center;

            opacity: 0;

            margin-top: -30rem;
            margin-left: -200rem;

            h1 {
                font-family: ${(props) => props.theme.fonts.fontText}, sans-serif;
                text-align: left;
                color: #000;

                margin: 0 5rem 0 35rem;
            }
        }

        img:hover {
            opacity: 100%;
        }

        img:hover ~.left-teacher-text {
            opacity: 100%;
            margin-left: 0rem;
        }
    }

    .founders .right-teacher-info {
    
        margin-top: -50rem;
        height: 100%;

        .right-teacher {
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: flex-end;
            
            img {
                height: 100%;
                opacity: 30%;
            }
        }


        .right-teacher-text {
            background-color: ${(props) => props.theme.colors.primaryLight};
            height: 25rem;
            width: 100%;

            display: flex;
            align-items: center;

            opacity: 0;

            margin-top: -30rem;
            margin-left: -200rem;

            h1 {
                font-family: ${(props) => props.theme.fonts.fontText}, sans-serif;
                color: #000;

                text-align: right;

                margin: 0 25rem 0 5rem;
            }
        }

        .right-teacher img:hover {
            opacity: 100%;
        }

        .right-teacher img:hover .right-teacher-text {
            opacity: 100%;
            margin-left: 0rem;
        }
    }

`;
