import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`
    
    /* @import url('https://fonts.googleapis.com/css2?family=Srisakdi:wght@400;700&family=Tenali+Ramakrishna&display=swap'); */

    :root {
        font-size: 60%;
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    html, body, #root {
    height: 100vh;
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    /* body,
    input,
    button,
    textarea {
        font: 500 1.6rem Poppins;
        color: var(--color-text-base);
    } */

    /* rem: definindo fontsize como 60%, o padrão é 16px, logo fica como 9.6 px
    O REM é a unidade relativa. 

    1 rem = 100%, que é 9.6
    1.6 rem é 60% a mais
    */

    .container {
    width: 90vw;
    max-width: 700px;
    }

    @media (min-width: 700px) {
        :root {
            font-size: 62.5%;
        }
    }

`;