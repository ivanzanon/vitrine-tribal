import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';

import CourseData from '../../@types/CourseData';
import HeaderAdmin from '../../components/HeaderAdmin';
import Main from '../../components/Main';
import { PageContainer } from '../../components/PageContainer';
import { InputText, Label, InputArea } from '../../components/styled/forms';
import SubmitButton from '../../components/SubmitButton';
import { storeCourse } from '../../services/service';
import { CourseForm } from './styles';

const ClassForm = () => {
  const history = useHistory();

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
    storeCourse(values);
    history.push('/classes-manager');
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
                <div className="field">
                  <Label>Nome da aula</Label>
                  <Field name="title" as={InputText} className="input-name" />
                </div>
                <div className="dates">
                  <div className="field">
                    <Label>Do dia</Label>
                    <Field name="dateStart" as={InputText} type="date" />
                  </div>
                  <div className="field">
                    <Label>até</Label>
                    <Field name="dateEnd" as={InputText} type="date" />
                  </div>
                </div>
                <div className="dates">
                  <div className="field">
                    <Label>Hora de início</Label>
                    <Field name="hourStart" as={InputText} type="time" />
                  </div>
                  <div className="field">
                    <Label>Hora de término</Label>
                    <Field name="hourEnd" as={InputText} type="time" />
                  </div>
                </div>
                <div className="field">
                  <Label>Valor</Label>
                  <Field name="price" as={InputText} type="currency" className="value" />
                </div>
                <div className="field">
                  <Label>Descrição</Label>
                  <Field name="description" as={InputArea} className="description" />
                </div>
                <div className="field">
                  <Label>Intervalo</Label>
                  <Field name="interval" as={InputText} />
                </div>
                <div className="field">
                  <Label>URL de Inscrição</Label>
                  <Field name="inscriptionUrl" as={InputText} />
                </div>
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
