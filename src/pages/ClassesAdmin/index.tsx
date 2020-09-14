import React from 'react';

import ClassCard from '../../components/ClassCard';
import HeaderAdmin from '../../components/HeaderAdmin';
import Main from '../../components/Main';
import NavigationLink from '../../components/NavigationLink';
import { PageContainer } from '../../components/PageContainer';
import PageTitle from '../../components/PageTitle';
import { getAllClasses } from '../../services/service';
import { ListOfClasses } from './styles';

const ClassesAdmin = () => {
  const classesInfo = getAllClasses();

  return (
    <PageContainer>
      <HeaderAdmin size="small" />
      <Main>
        <PageTitle>
          Suas Aulas
        </PageTitle>
        <NavigationLink to="class-form" label="Nova aula" />
        <ListOfClasses>
          {
            classesInfo.map((classInfo) => <ClassCard classInfo={classInfo} />)
          }
        </ListOfClasses>
      </Main>
    </PageContainer>
  );
};

export default ClassesAdmin;
