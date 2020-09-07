import React from "react";
import { InputContainer, Label, InputField } from "./styles";

interface InputProps {
    label?: string;
}

const Input:React.FC<InputProps> = (props) => {
    return (
        <InputContainer>
            <Label>{props.label}</Label>
            <InputField></InputField>
        </InputContainer>
    )
}

export default Input;