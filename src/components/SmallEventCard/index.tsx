import React from 'react';
import { Card, Title, Teacher, Description, Date, Price } from './styles';

interface Event {
    title: string;
    description: string;
    price: number;
    date: string;
}

interface EventProps {
    eventInfo: Event;
}

const SmallEventCard: React.FC<EventProps> = ({ eventInfo }) => {
    return (
        <Card>
            <Title>{eventInfo.title}</Title>
            <Description>{eventInfo.description}</Description>
            <Price>R$ {eventInfo.price}</Price>
            <Date>{eventInfo.date}</Date>
        </Card>
    );
};

export default SmallEventCard;