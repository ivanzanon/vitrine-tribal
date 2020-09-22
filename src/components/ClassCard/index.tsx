import React from 'react';

import CourseData from '../../@types/CourseData';
import Thumb from '../../assets/images/thumb.png';
import { deleteCourse } from '../../services/service';
import NavigationLink from '../NavigationLink';
import RegisterButton from '../RegisterButton';
import { Text } from '../styled/display';
import SubmitButton from '../SubmitButton';
import {
  Arcticle, ClassName, Main, Infos, Teacher,
} from './styles';

interface ClassProps {
    classInfo: CourseData;
    isAdmin?: boolean;
}

const ClassCard: React.FC<ClassProps> = ({ classInfo, isAdmin }) => {
  const handleDeleteMethod = async (id:number|any) => {
    await deleteCourse(id);
  };

  const button = !isAdmin
    ? (
      <RegisterButton
        label="Inscreva-se"
        url={classInfo.inscriptionUrl ? classInfo.inscriptionUrl : '/'}
        color="#FFF"
      />
    )
    : (
      <div>
        <SubmitButton
          label="Excluir"
          clickHandler={() => handleDeleteMethod(classInfo.id)}
          color="#FFF"
        />
        <NavigationLink
          label=""
          to="class-form"
          color="#FFF"
        />
      </div>
    );

  return (
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
          {`De ${classInfo.dateStart} até ${classInfo.dateEnd}`}
        </Text>
        <Text fontDark size="2">{classInfo.interval}</Text>
        <Text fontDark size="2">{classInfo.hourStart}</Text>
        <Text fontDark size="3">
          R$
          {classInfo.price}
        </Text>

        {button}

      </Infos>
    </Arcticle>
  );
};

export default ClassCard;
