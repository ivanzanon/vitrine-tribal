import React from 'react';
import { Link } from 'react-router-dom';

import Pencil from '../../../assets/images/icons/pencil.svg';
import { LinkContainer } from './styles';

interface RoundNavigationButtonProps {
    to: string;
    height?: string;
    width?: string,
    color?: string;
  }

const RoundNavigationButton: React.FC<RoundNavigationButtonProps> = ({
  to, height, width, color,
}) => (
  <LinkContainer height={height} width={width} color={color}>
    <Link to={to}>
      <img src={Pencil} width={width} height={height} color={color} alt="Caneta escrevendo em papel" />
    </Link>
  </LinkContainer>
);

export default RoundNavigationButton;
