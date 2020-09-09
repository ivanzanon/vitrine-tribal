import React from 'react';

import {
  Card, Title, Teacher, Description, Date, Price,
} from './styles';

interface Class {
    title: string;
    teacher: string;
    description: string;
    price: number;
    date: string;
}

interface ClassProps {
    classInfo: Class;
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
    <Date>{classInfo.date}</Date>
  </Card>
);

export default SmallClassCard;
