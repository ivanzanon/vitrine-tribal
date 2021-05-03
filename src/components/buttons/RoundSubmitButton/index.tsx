import React from 'react';

import Trash from '../../../assets/images/icons/trash.svg';
import { RoundButton } from './styles';

interface ButtonProps {
  height?: string;
  width?: string;
  color?: string;
  label: string;
  clickHandler?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}
const RoundSubmitButton:React.FC<ButtonProps> = ({
  color, height, width, clickHandler,
}) => (
  <RoundButton
    onClick={clickHandler}
    color={color}
    height={height}
    width={width}
  >
    <img src={Trash} alt="" />
  </RoundButton>
);

export default RoundSubmitButton;
