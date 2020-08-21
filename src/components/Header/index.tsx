import React from 'react';

import headerBackgroundImage from '../../assets/images/HeaderBckGrnd.svg';
import loginLinkIcon from '../../assets/images/icons/login.svg';
import { Header, TitleContainer, BottomContainer, MenuContainer, Title } from './styles';
import { Link } from 'react-router-dom';

interface HeaderProps {
    size: string;
}

const MainHeader: React.FC<HeaderProps> = ({ size }) => {

    return(
        <Header size={size}>
            <TitleContainer>
                <img src={headerBackgroundImage} alt="Flor Laranja"/>
                <Title>Vitrine Tribal</Title>
            </TitleContainer>
            <BottomContainer>
                <MenuContainer>
                    <Link to="/" >
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