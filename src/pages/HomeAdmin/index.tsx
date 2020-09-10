import React from 'react';

import { Main } from '../../components/Main';
import { PageContainer } from '../../components/PageContainer';

const HomeAdmin = () => (
  <PageContainer>
    <Main>
      {localStorage.getItem('tokenlabCalendar/userID')}
      {localStorage.getItem('tokenlabCalendar/token')}
    </Main>
  </PageContainer>
);

export default HomeAdmin;
