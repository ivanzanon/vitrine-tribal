import React from 'react';
import { Link } from 'react-router-dom';
import {StyledLink} from './styles';

interface NavigationLinkProps {
    to: string;
    label: string;
};

const NavigationLink: React.FC<NavigationLinkProps> = (props) => {
    return (
        <StyledLink >
            <Link to={props.to}>
                {props.label}
            </Link>
        </StyledLink>
    )
}

export default NavigationLink;