import React from 'react';
import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.main`
    width: 100vw;
    height: 100vh;

    display: flex;

    flex-direction: column;

    color: ${props => props.theme.colors.primary};

    .main-container {
        width: 100%;
        height: 500rem;

        background: 
            linear-gradient(
                ${props => props.theme.colors.backgroundBase}, 
                ${props => lighten(0.11, props.theme.colors.backgroundBase)});
    }
`;
