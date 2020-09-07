import React from 'react';

import {Button} from './styles';

interface ButtonProps {
    height?: string;
    width?: string;
    color?: string;
    label: string;
};

const SubmitButton:React.FC<ButtonProps> = (props) => {
    return (
        <Button type="submit" value={props.label} color={props.color}/>
    );
};

export default SubmitButton;