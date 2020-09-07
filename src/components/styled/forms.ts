import styled from 'styled-components';

export const Label = styled.label`

    font: ${props => props.theme.fonts.fontText};
    font-size: 1.5rem;
    color: ${props => props.theme.colors.primaryDarker};

`;

export const InputText = styled.input`

    height: 3.5rem;
    width: 100%;
    border-radius: 8px;
    border: 0rem solid ${props => props.theme.colors.secondaryLight};
    padding: 1rem;

    :focus {
        border: 0;
        background: ${ ({theme}) => theme.colors.open}; 
        outline: none;
    };

    :disabled {
        background: ${ ({theme}) => theme.colors.openLighter};
    }

    :invalid {
        border: 0.3rem solid ${props => props.theme.colors.title}
    }

`;