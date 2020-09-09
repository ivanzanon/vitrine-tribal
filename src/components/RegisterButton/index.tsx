import React from 'react';

import Register from '../../assets/images/icons/register.svg';
import { Text } from '../styled/display';
import { Button } from './styles';

interface ButtonProps {
    height?: string;
    width?: string;
    color?: string;
    label: string;
    url: string;
}

const RegisterButton:React.FC<ButtonProps> = ({
  url, label, height, width, color,
}) => (
  <Button href={url}>
    <img src={Register} width={width} height={height} color={color} alt="Caneta escrevendo em papel" />
    <Text size="2">{label}</Text>
  </Button>
);

export default RegisterButton;
