import styled from 'styled-components';

export const InputContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const Label = styled.label`

    font: ${props => props.theme.fonts.fontText};
    font-size: 3rem;
    color: ${props => props.theme.colors.primaryLight};

`;

export const InputField = styled.input`

    height: 3rem;
    width: 100%;
    border: 0.1rem solid ${props => props.theme.colors.secondaryLight};

    :focus {
        background: ${ ({theme}) => theme.colors.backGroundLighter}; 
    };

`;