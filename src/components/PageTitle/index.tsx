import React from 'react';

import {Title} from './styles';

const PageTitle: React.FC = (props) => {
    return(
        <Title>
            <h1>
                {props.children}
            </h1>
        </Title>
    );
}

export default PageTitle;