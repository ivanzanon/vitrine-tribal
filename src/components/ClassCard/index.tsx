import React from 'react';
import { Arcticle, Title, Main, Infos, Description, Price, Date, Text, Teacher } from './styles';

import Thumb from "../../assets/images/thumb.png";
import Register from "../../assets/images/icons/register.svg";

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
            <Title>
                <Text>{classInfo.title}</Text>
            </Title>
            <Teacher>
                <img src={Thumb} alt="foto da professora"/>
                <Text className="teacher">{classInfo.teacher}</Text>
            </Teacher>
            <Main>
                <Text>{classInfo.description}</Text>
            </Main>
            <Infos>
                <Text className="date"> De {classInfo.date} até {classInfo.date}</Text>
                <Text className="interval">{classInfo.interval}</Text>
                <Text className="time">{classInfo.time}</Text>
                <Text className="price">R$ {classInfo.price}</Text>
                <a href="https://www.youtube.com/watch?v=HN1UjzRSdBk">
                    <img src={Register} alt="Caneta escrevendo em papel"/>
                    <Text>Inscreva-se</Text>
                </a>
            </Infos>
        </Arcticle>
    );
};

export default ClassCard;