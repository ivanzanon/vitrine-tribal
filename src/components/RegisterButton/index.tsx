import React from 'react';

import Register from "../../assets/images/icons/register.svg";

import {Text} from "../styled/display";
import {Button} from './styles';

interface ButtonProps {
    height?: string;
    width?: string;
    color?: string;
    label: string;
    url: string;
};

const RegisterButton:React.FC<ButtonProps> = (props) => {
    return (
        <Button href={props.url}>
            <img src={Register} alt="Caneta escrevendo em papel"/>
            <Text size="2">{props.label}</Text>
        </Button>
    );
};

export default RegisterButton;