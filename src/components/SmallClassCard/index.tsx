import React from 'react';

import CourseData from '../../@types/CourseData';
import { Text } from '../styled/display';
import { Card } from './styles';

interface ClassProps {
    classInfo: CourseData;
}

const SmallClassCard: React.FC<ClassProps> = ({ classInfo }) => (
  <Card>
    <Text fontDark size="3">{classInfo.title}</Text>
    <Text fontDark size="3.5">{classInfo.teacher}</Text>
    <Text fontDark size="2">{classInfo.description}</Text>
    <Text fontDark size="3">
      R$
      {classInfo.price}
    </Text>
    <Text fontDark size="3">{classInfo.dateStart}</Text>
  </Card>
);

export default SmallClassCard;
