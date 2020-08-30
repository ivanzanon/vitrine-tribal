import React from 'react';
import {PageContainer} from './styles';
import ClassCard from '../../components/ClassCard';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';
import {getAllClasses} from '../../services/service';

const ClassesList = () => {

    const classesInfo = getAllClasses();

    return (
        <PageContainer>
            <Header size='small' />
            <div className="main-container">
                <PageTitle>
                    Aulas
                </PageTitle>
                <div className="list-of-classes">
                    { 
                        classesInfo.map( classInfo => <ClassCard classInfo={classInfo} /> )
                    }
                </div>
            </div>
        </PageContainer>
    );
}

export default ClassesList;