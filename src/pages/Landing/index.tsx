import React from 'react';

import Header from '../../components/Header';
import SectionDivider from '../../components/SectionDivider';
import SmallClassCard from '../../components/SmallClassCard';
import SmallEventCard from '../../components/SmallEventCard';

import belly01 from '../../assets/images/belly01.png';
import belly02 from '../../assets/images/belly02.png';
import belly03 from '../../assets/images/belly03.png';
import belly04 from '../../assets/images/belly04.png';

import {PageContainer, MainContainer, DancersContainer, Title, ItemConteiner} from './styles';

const Landing = () => {

    const ClassesData = [
        {
            title: "Fundamentos do Tribal Fusion",
            teacher: "Raiza",
            description: "description 01",
            price: 150,
            date: "01/01/2021"
        },
        {
            title: "Aulão Gratuito Inaugural",
            teacher: "Raiza",
            description: "description 01",
            price: 2000,
            date: "01/01/2021"
        },
        {
            title: "Preparação dos quadris",
            teacher: "Júlia",
            description: "description 01",
            price: 250,
            date: "01/01/2021"
        },
    ]

    const EventsData = [
        {
            title: "Baile Pancadão do Tribal Fusion",
            description: "description 01",
            price: 150,
            date: "01/01/2021"
        },
        {
            title: "Workshop de TF com Samba",
            description: "description 01",
            price: 2000,
            date: "01/01/2021"
        },
        {
            title: "Encontro nacional de Tribal Fusion",
            description: "description 01",
            price: 250,
            date: "01/01/2021"
        },
    ]

    return (
        <PageContainer>

            <Header size="large"/>

            <MainContainer>
                <h1>Frase spbre o Tribal Fusion que fala sobre ela em algumas palavras.</h1>

                <SectionDivider />
                <DancersContainer>
                    <img src={belly04} alt=""/>
                    <img src={belly01} alt=""/>
                    <img src={belly03} alt=""/>
                </DancersContainer>
                <SectionDivider />

                <Title>
                    <h1>Aulas em destaque</h1>
                </Title>
                <ItemConteiner>
                    {
                        ClassesData.map(classData => {
                            return (
                                <SmallClassCard classInfo={classData}/>
                            );
                        })
                    }
                </ItemConteiner>

                <Title>
                    <h1>Eventos mais recentes</h1>
                </Title>
                <ItemConteiner>
                {
                    EventsData.map(eventData => {
                        return (
                            <SmallEventCard eventInfo={eventData}/>
                        );
                    })
                }
                </ItemConteiner>
            </MainContainer>
        </PageContainer>

    );
};

export default Landing;