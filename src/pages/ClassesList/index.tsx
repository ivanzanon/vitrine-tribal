import React, { useState, useEffect } from 'react';

import CourseData from '../../@types/CourseData';
import ClassCard from '../../components/ClassCard';
import Main from '../../components/Main';
import MainHeader from '../../components/MainHeader';
import { PageContainer } from '../../components/PageContainer';
import PageTitle from '../../components/PageTitle';
import { getAllClasses } from '../../services/service';
import { ListOfClasses } from './styles';

const ClassesList:React.FC = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function getUserData() {
      const listOfCourses = await getAllClasses();

      setCourses(listOfCourses);
    }

    getUserData();
  }, []);

  return (
    <PageContainer>
      <MainHeader size="small" />
      <Main>
        <PageTitle>
          Aulas
        </PageTitle>
        <ListOfClasses>
          {
            courses.map(
              (classInfo:CourseData) => <ClassCard classInfo={classInfo} />,
            )
          }
        </ListOfClasses>
      </Main>
    </PageContainer>
  );
};

export default ClassesList;
