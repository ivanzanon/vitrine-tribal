import React from 'react';
import { Link } from 'react-router-dom';

import logoutLinkIcon from '../../assets/images/icons/logout.svg';
import { Title } from '../styled/display';
import { Header } from './styles';

interface HeaderProps {
    size: string;
    thumb?: string;
    userFullName?: string;
}

const HeaderAdmin: React.FC<HeaderProps> = ({ size }) => {
  const getTitleSize = () => {
    if (size === 'large') return '10';
    return '6';
  };

  return (
    <Header size={size}>
      <div className="title-container">
        <div className="title">
          <Title size={getTitleSize()}>Vitrine Tribal</Title>
        </div>
      </div>
      <div className="bottom-container">
        <div className="menu-container">
          <Link to="/">
            <img src={logoutLinkIcon} alt="Login" className="login-icon" />
          </Link>
        </div>
      </div>
    </Header>
  );
};

export default HeaderAdmin;
