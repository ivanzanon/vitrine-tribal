import React from 'react';
import { Link } from 'react-router-dom';

import { StyledLink } from './styles';

interface NavigationLinkProps {
    to: string;
    label: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({ to, label }) => (
  <StyledLink>
    <Link to={to}>
      {label}
    </Link>
  </StyledLink>
);

export default NavigationLink;
