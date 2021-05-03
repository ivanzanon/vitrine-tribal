import styled from 'styled-components';

export const CourseForm = styled.section`

    padding: 5rem;
    width: 80%;

    form {
        display: flex;
        flex-direction: column;

        label {
            margin-top: 1.5rem;
        }

        input {
            margin-top: 0.5rem;
        }
    }

    .input-name {
        width: 50%;
    }

    .date {
        width: 25%;    
    }

    .time {
        width: 25%;    
    }

    .dates {
        display: flex;
        flex-direction: row;
        
        .field {
            width: 20%;
            margin-right: 5rem;
        }
    }

    .field {
        display: flex;
        flex-direction: column;
    }

    .value {
        width: 20%;
    }

    .description {
        vertical-align: initial;
    }

`;
