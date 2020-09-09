import React from 'react';

import { InputContainer, Label, InputField } from './styles';

interface InputProps {
    label?: string;
}

const Input:React.FC<InputProps> = ({ label }) => (
  <InputContainer>
    <Label>{label}</Label>
    <InputField />
  </InputContainer>
);

export default Input;
