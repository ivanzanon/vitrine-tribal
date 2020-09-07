import React from 'react';
import { Title } from '../styled/display';

import {PageTitleContainer} from './styles';

const PageTitle: React.FC = (props) => {
    return(
        <PageTitleContainer>
            <Title size="8" >
                {props.children}
            </Title>
        </PageTitleContainer>
    );
}

export default PageTitle;