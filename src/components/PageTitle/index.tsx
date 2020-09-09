import React from 'react';

import { Title } from '../styled/display';
import { PageTitleContainer } from './styles';

const PageTitle: React.FC = ({ children }) => (
  <PageTitleContainer>
    <Title size="8">
      {children}
    </Title>
  </PageTitleContainer>
);

export default PageTitle;
