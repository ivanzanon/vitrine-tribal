import React from 'react';

import ClassCard from '../../components/ClassCard';
import Header from '../../components/Header';
import { Main } from '../../components/Main';
import { PageContainer } from '../../components/PageContainer';
import PageTitle from '../../components/PageTitle';
import { getAllClasses } from '../../services/service';
import { ListOfClasses } from './styles';

const ClassesList = () => {
  const classesInfo = getAllClasses();

  return (
    <PageContainer>
      <Header size="small" />
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
