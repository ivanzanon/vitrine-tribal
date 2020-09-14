import React from 'react';

import HeaderAdmin from '../../components/HeaderAdmin';
import Main from '../../components/Main';
import { PageContainer } from '../../components/PageContainer';
import PageTitle from '../../components/PageTitle';
import { InputText, Label } from '../../components/styled/forms';
import SubmitButton from '../../components/SubmitButton';

const ClassForm = () => (

  <PageContainer>
    <HeaderAdmin size="small" />
    <Main>
      {/* <PageTitle>
        Cadastro de Aula
      </PageTitle> */}
      <form action="">
        <Label>Nome da Aula</Label>
        <InputText />
        <Label>Data Início</Label>
        <InputText />
        <Label>Data Fim</Label>
        <InputText />
        <Label>Hora Início</Label>
        <InputText />
        <Label>Hora Fim</Label>
        <InputText />
        <Label>Valor</Label>
        <InputText />
        <Label>Descrição</Label>
        <InputText />
        <SubmitButton label="OK" color="yay" />
      </form>
    </Main>
  </PageContainer>
);

export default ClassForm;
