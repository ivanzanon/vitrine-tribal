import React from 'react';

import { Button } from './styles';

interface ButtonProps {
    height?: string;
    width?: string;
    color?: string;
    label: string;
}

const SubmitButton:React.FC<ButtonProps> = ({ label, color }) => (
  <Button type="submit" value={label} color={color} />
);

export default SubmitButton;
