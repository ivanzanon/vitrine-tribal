import React from 'react';
import Header from '../../components/Header';
import PageTitle from '../../components/PageTitle';

import {ClassesListPageContainer} from './styles';

const ClassesList = () => {
    return (
        <ClassesListPageContainer>
            <Header size='small' />
            <div className="main-container">
                <PageTitle>
                    Aulas
                </PageTitle>
            </div>
        </ClassesListPageContainer>
    );
}

export default ClassesList;