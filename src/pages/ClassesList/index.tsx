import React from 'react';

import ClassCard from '../../components/ClassCard';
import Main from '../../components/Main';
import MainHeader from '../../components/MainHeader';
import { PageContainer } from '../../components/PageContainer';
import PageTitle from '../../components/PageTitle';
import { getAllClasses } from '../../services/service';
import { ListOfClasses } from './styles';

const ClassesList = () => {
  const classesInfo = getAllClasses();

  return (
    <PageContainer>
      <MainHeader size="small" />
      <Main>
        <PageTitle>
          Aulas
        </PageTitle>
        <ListOfClasses>
          {
            classesInfo.map((classInfo) => <ClassCard classInfo={classInfo} />)
          }
        </ListOfClasses>
      </Main>
    </PageContainer>
  );
};

export default ClassesList;
