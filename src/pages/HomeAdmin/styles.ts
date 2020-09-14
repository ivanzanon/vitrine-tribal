import styled from 'styled-components';

import { StyledLink } from '../../components/NavigationLink/styles';

export const UserInfo = styled.section`

    display: flex;
    align-items: center;
    justify-content:center;

    flex-direction: row;

    margin-top: 5rem;

    img { 
        
        height: 15rem;

        border-style: solid;
        border-width: 3px;
        border-color: ${({ theme }) => theme.colors.primaryDark};
        border-radius: 100px;

        margin-right: 4rem;
    }

`;

export const Controls = styled.section`

    width: 100%;
    padding: 0 25rem;

    display: flex;
    align-items: center;
    justify-content:space-around;

    flex-direction: row;

    margin-top: 5rem;
`;

export const StyledNavigationLink = styled(StyledLink)` 

    a h1 {
        font-size: 3rem;

        color: black;
    }

`;
