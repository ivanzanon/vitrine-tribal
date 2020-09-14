import React from 'react';

import Thumb from '../../assets/images/thumb.png';
import RegisterButton from '../RegisterButton';
import { Text } from '../styled/display';
import {
  Arcticle, ClassName, Main, Infos, Teacher,
} from './styles';

interface Class {
    title: string;
    teacher: string;
    description: string;
    price: number;
    date: string;
    time: string;
    interval: string;
}

interface ClassProps {
    classInfo: Class;
}

const ClassCard: React.FC<ClassProps> = ({ classInfo }) => (
  <Arcticle>
    <ClassName>
      <Text fontDark size="2.5">{classInfo.title}</Text>
    </ClassName>
    <Teacher>
      <img src={Thumb} alt="foto da professora" />
      <Text fontDark size="4">{classInfo.teacher}</Text>
    </Teacher>
    <Main>
      <Text fontDark size="2">{classInfo.description}</Text>
    </Main>
    <Infos>
      <Text fontDark size="2.5">
        {' '}
        De
        {classInfo.date}
        {' '}
        até
        {classInfo.date}
      </Text>
      <Text fontDark size="2">{classInfo.interval}</Text>
      <Text fontDark size="2">{classInfo.time}</Text>
      <Text fontDark size="3">
        R$
        {classInfo.price}
      </Text>

      <RegisterButton
        label="Inscreva-se"
        url="https://www.youtube.com/watch?v=HN1UjzRSdBk"
        color="#FFF"
      />
    </Infos>
  </Arcticle>
);

export default ClassCard;
