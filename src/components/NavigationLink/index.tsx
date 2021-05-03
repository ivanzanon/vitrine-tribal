import React from 'react';
import { Link } from 'react-router-dom';

import { StyledLink } from './styles';

interface NavigationLinkProps {
  to: string;
  label: string;
  height?: string;
  width?: string,
  color?: string;
}

const NavigationLink: React.FC<NavigationLinkProps> = ({
  to, label, height, width, color,
}) => (
  <StyledLink height={height} width={width} color={color}>
    <Link to={to}>
      <h1>{label}</h1>
    </Link>
  </StyledLink>
);

export default NavigationLink;
