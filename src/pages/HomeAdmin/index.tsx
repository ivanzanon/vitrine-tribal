import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import ThumbImage from '../../assets/images/thumb.png';
import HeaderAdmin from '../../components/HeaderAdmin';
import Main from '../../components/Main';
import NavigationLink from '../../components/NavigationLink';
import { PageContainer } from '../../components/PageContainer';
import { Title } from '../../components/styled/display';
import { getUserInfo } from '../../services/service';
import { Controls, UserInfo } from './styles';

const HomeAdmin:React.FC = () => {
  const history = useHistory();
  const [userName, setUserName] = useState('');

  useEffect(() => {
    async function getUserData() {
      const { fullname } = await getUserInfo();

      if (fullname) {
        setUserName(fullname);
      } else {
        history.push('/');
      }
    }

    getUserData();
  }, []);

  return (
    <PageContainer>
      <HeaderAdmin size="small" />
      <Main>
        <UserInfo>
          <img src={ThumbImage} alt="" />

          <Title size="10">{userName}</Title>
        </UserInfo>
        <Controls>
          <NavigationLink label="Aulas" to="/classes-manager" height="20" width="25" />
          <NavigationLink label="Eventos" to="/" height="20" width="25" />
        </Controls>
      </Main>
    </PageContainer>
  );
};

export default HomeAdmin;
