import React from 'react';
import { Arcticle, Teacher, Title, Description, Price, Date } from './styles';

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

const ClassCard: React.FC<ClassProps> = ({ classInfo }) => {
    return (
        <Arcticle>
            <Title>{classInfo.title}</Title>
            <Teacher>{classInfo.teacher}</Teacher>
            <Description>{classInfo.description}</Description>
            <Price>R$ {classInfo.price}</Price>
            <Date>{classInfo.date}</Date>
        </Arcticle>
    );
};

export default ClassCard;