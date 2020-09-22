import React, { useState, useEffect } from 'react';

import CourseData from '../../@types/CourseData';
import ClassCard from '../../components/ClassCard';
import HeaderAdmin from '../../components/HeaderAdmin';
import Main from '../../components/Main';
import NavigationLink from '../../components/NavigationLink';
import { PageContainer } from '../../components/PageContainer';
import PageTitle from '../../components/PageTitle';
import { getClassesOfTeacher } from '../../services/service';
import { ListOfClasses } from './styles';

const ClassesAdmin:React.FC = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function getUserData() {
      const listOfCourses = await getClassesOfTeacher();

      setCourses(listOfCourses);
    }

    getUserData();
  }, []);

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
            courses.map((course:CourseData) => <ClassCard classInfo={course} isAdmin />)
          }
        </ListOfClasses>
      </Main>
    </PageContainer>
  );
};

export default ClassesAdmin;
