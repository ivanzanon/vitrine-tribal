import React from 'react';
import { Link } from 'react-router-dom';

import headerBackgroundImage from '../../assets/images/HeaderBckGrnd.svg';
import loginLinkIcon from '../../assets/images/icons/login.svg';
import { Title } from '../styled/display';
import { Header } from './styles';

interface HeaderProps {
    size: string;
}

const MainHeader: React.FC<HeaderProps> = ({ size }) => {
  const getTitleSize = (size:string) => {
    if (size === 'large') return '10';
    return '6';
  };

  return (
    <Header size={size}>
      <div className="title-container">
        <img src={headerBackgroundImage} alt="Flor Laranja" />
        <div className="title">
          <Title size={getTitleSize(size)}>Vitrine Tribal</Title>
        </div>
      </div>
      <div className="bottom-container">
        <div className="menu-container">
          <Link to="/classes">
            Aulas
          </Link>
          <Link to="/">
            Eventos
          </Link>
          <Link to="/about">
            Sobre
          </Link>
          <Link to="/login">
            <img src={loginLinkIcon} alt="Login" className="login-icon" />
          </Link>
        </div>
      </div>
    </Header>
  );
};

export default MainHeader;
