import React from 'react';

import CourseData from '../../@types/CourseData';
import {
  Card, Title, Teacher, Description, Date, Price,
} from './styles';

interface ClassProps {
    classInfo: CourseData;
}

const SmallClassCard: React.FC<ClassProps> = ({ classInfo }) => (
  <Card>
    <Title>{classInfo.title}</Title>
    <Teacher>{classInfo.teacher}</Teacher>
    <Description>{classInfo.description}</Description>
    <Price>
      R$
      {classInfo.price}
    </Price>
    <Date>{classInfo.dateStart}</Date>
  </Card>
);

export default SmallClassCard;
