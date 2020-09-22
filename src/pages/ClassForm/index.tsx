import { Field, Form, Formik } from 'formik';
import React from 'react';

import CourseData from '../../@types/CourseData';
import HeaderAdmin from '../../components/HeaderAdmin';
import Main from '../../components/Main';
import { PageContainer } from '../../components/PageContainer';
import { InputText, Label } from '../../components/styled/forms';
import SubmitButton from '../../components/SubmitButton';
import { storeCourse } from '../../services/service';
import { CourseForm } from './styles';

const ClassForm = () => {
  const initialValues:CourseData = {
    title: '',
    teacher: '5',
    description: '',
    price: 0,
    dateStart: '',
    dateEnd: '',
    hourStart: '',
    hourEnd: '',
    interval: '',
    inscriptionUrl: '',
  };

  function storeCourseHandler(values:CourseData) {
    alert(values);
    storeCourse(values);
  }

  return (
    <PageContainer>
      <HeaderAdmin size="small" />
      <Main>
        {/* <PageTitle>
        Aula
      </PageTitle> */}

        <CourseForm>
          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              storeCourseHandler(values);
            }}
          >
            {() => (
              <Form>
                <Label>Nome da Aula</Label>
                <Field name="title" as={InputText} className="input-name" />
                <Label>Data Início</Label>
                <Field name="dateStart" as={InputText} type="date" />
                <Label>Data Fim</Label>
                <Field name="dateEnd" as={InputText} type="date" />
                <Label>Hora Início</Label>
                <Field name="hourStart" as={InputText} type="time" />
                <Label>Hora Fim</Label>
                <Field name="hourEnd" as={InputText} type="time" />
                <Label>Valor</Label>
                <Field name="price" as={InputText} type="currency" />
                <Label>Descrição</Label>
                <Field name="description" as={InputText} />
                <Label>Intervalo</Label>
                <Field name="interval" as={InputText} />
                <Label>URL de Inscrição</Label>
                <Field name="inscriptionUrl" as={InputText} />
                <SubmitButton label="OK" color="yay" />
              </Form>
            )}
          </Formik>
        </CourseForm>
      </Main>
    </PageContainer>
  );
};

export default ClassForm;
