import React from 'react';

import mainDetailImage from '../../assets/images/MainDetail.svg';
import {Divider} from './styles';

const SectionDivider = () => {
    return (
        <Divider >
            <img src={mainDetailImage} alt="Triângulos dourados"/>
            <img src={mainDetailImage} alt="Triângulos dourados"/>
        </Divider>
    );
}

export default SectionDivider;