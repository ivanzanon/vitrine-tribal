import React from 'react';

import DancerLeftImage from '../../assets/images/dancer01.png';
import DancerRightImage from '../../assets/images/dancer02.png';
import MainHeader from '../../components/MainHeader';
import PageTitle from '../../components/PageTitle';
import SectionDivider from '../../components/SectionDivider';
import { PageContainer } from './styles';

const About = () => (
  <PageContainer>
    <MainHeader size="small" />
    <div className="main-container">
      <PageTitle>
        Sobre o Tribal Fusion
      </PageTitle>

      <article className="content">
        O Tribal Fusion Bellydance surgiu a partir do American Tribal Style (ATS) em
        meados dos anos 90 em São Francisco, Califórnia. Jill Parker, fundadora do Ultra
        Gypsy, primeiro grupo de Tribal Fusion, havia estudado American Tribal
        Style (ATS) com Carolena Nericcio e o FatChanceBellyDance®, porém num
        determinado momento deixou o grupo para investir em suas próprias criações com mais
        liberdade, uma vez que o ATS® é um sistema com regras específicas, além de ter sido
        planejado para ser dançado em grupo, o que excluía a possibilidade de solos.
      </article>

      <div className="founders">
        <div className="left-teacher-info">
          <img src={DancerLeftImage} alt="" className="left-teacher" />
          <div className="left-teacher-text">
            <h1>
              Júlia Gunesh! O Tribal Fusion Bellydance surgiu a partir do American Tribal Style (ATS) em meados dos anos 90 em São Francisco, Califórnia. Jill Parker, fundadora do Ultra Gypsy, primeiro grupo de Tribal Fusion, havia estudado American Tribal Style (ATS) com Carolena Nericcio
            </h1>
          </div>
        </div>
        <div className="right-teacher-info">
          <div className="right-teacher">
            <img src={DancerRightImage} alt="" />
          </div>
          <div className="right-teacher-text">
            <h1>
              Raiza Latorraca! O Tribal Fusion Bellydance surgiu a partir do American Tribal Style (ATS) em meados dos anos 90 em São Francisco, Califórnia. Jill Parker, fundadora do Ultra Gypsy, primeiro grupo de Tribal Fusion, havia estudado American Tribal Style (ATS) com Carolena Nericcio
            </h1>
          </div>
        </div>
      </div>

      <SectionDivider />
    </div>
  </PageContainer>
);

export default About;
