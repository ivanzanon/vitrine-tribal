import React from 'react';

import headerBackgroundImage from '../../assets/images/HeaderBckGrnd.svg';
import loginLinkIcon from '../../assets/images/icons/login.svg';
import { Header, BottomContainer, MenuContainer } from './styles';
import { Link } from 'react-router-dom';

interface HeaderProps {
    size: string;
}

const MainHeader: React.FC<HeaderProps> = ({ size }) => {

    return(
        <Header size={size}>
            <div className="title-container">
                <img src={headerBackgroundImage} alt="Flor Laranja"/>
                <h1>Vitrine Tribal</h1>
            </div>
            <BottomContainer>
                <MenuContainer>
                    <Link to="/about" >
                        Sobre
                    </Link>
                    <Link to="/" >
                        Aulas
                    </Link>
                    <Link to="/" >
                        Eventos
                    </Link>
                    <Link to="/" >
                        <img src={loginLinkIcon} alt="Login" className="login-icon"/>
                    </Link>
                </MenuContainer>
            </BottomContainer>
        </Header>
    );
}

export default MainHeader;