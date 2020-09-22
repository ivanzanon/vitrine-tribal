import React from 'react';

import { Button } from './styles';

interface ButtonProps {
    height?: string;
    width?: string;
    color?: string;
    label: string;
    clickHandler?: (event: React.MouseEvent<HTMLInputElement>) => void;
}

const SubmitButton:React.FC<ButtonProps> = ({
  label, color, height, width, clickHandler,
}) => (
  <Button type="submit" onClick={clickHandler} value={label} color={color} height={height} width={width} />
);

export default SubmitButton;
