import React from 'react';
import { Arcticle, ClassName, Main, Infos, Teacher } from './styles';

import { Text } from '../styled/display';

import Thumb from "../../assets/images/thumb.png";
import RegisterButton from '../RegisterButton';

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

const ClassCard: React.FC<ClassProps> = ({ classInfo }) => {
    return (
        <Arcticle>
            <ClassName>
                <Text size="2.5">{classInfo.title}</Text>
            </ClassName>
            <Teacher>
                <img src={Thumb} alt="foto da professora"/>
                <Text size="4">{classInfo.teacher}</Text>
            </Teacher>
            <Main>
                <Text size="2">{classInfo.description}</Text>
            </Main>
            <Infos>
                <Text size="2.5"> De {classInfo.date} até {classInfo.date}</Text>
                <Text size="2">{classInfo.interval}</Text>
                <Text size="2">{classInfo.time}</Text>
                <Text size="3">R$ {classInfo.price}</Text>

                <RegisterButton 
                    label='Inscreva-se' 
                    url='https://www.youtube.com/watch?v=HN1UjzRSdBk'
                    color='#FFF'
                />

                {/* <a href="https://www.youtube.com/watch?v=HN1UjzRSdBk">
                    <img src={Register} alt="Caneta escrevendo em papel"/>
                    <Text size="2">Inscreva-se</Text>
                </a> */}
            </Infos>
        </Arcticle>
    );
};

export default ClassCard;