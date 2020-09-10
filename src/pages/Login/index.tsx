import { Field, Form, Formik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';

import { LoginRequest } from '../../@types/LoginData';
import Flor from '../../assets/images/flor.svg';
import NavigationLink from '../../components/NavigationLink';
import { Title } from '../../components/styled/display';
import { Label, InputText } from '../../components/styled/forms';
import SubmitButton from '../../components/SubmitButton';
import { login } from '../../services/service';
import { LoginContainer } from './styles';

const Login = () => {
  const history = useHistory();

  const initialValues:LoginRequest = {
    username: '',
    password: '',
  };

  const loginHandler = async (values:LoginRequest) => {
    const response = await login(values);
    if (response) {
      history.push('/home');
    } else {
      alert('Deu ruim');
    }
  };

  return (
    <LoginContainer>
      <div className="main">

        <div className="logo-container">
          <img src={Flor} alt="Flor de decoração" />
          <Title size="8">Vitrine Tribal</Title>
        </div>

        <div className="form-container">
          <Title size="6">Login</Title>

          <Formik
            initialValues={initialValues}
            onSubmit={(values) => {
              loginHandler(values);
            }}
          >
            {() => (
              <Form>
                <div className="fields">
                  <Label>Nome do usuário</Label>
                  <Field name="username" as={InputText} />
                  <Label>Senha</Label>
                  <Field name="password" as={InputText} type="password" />
                </div>
                <div className="buttons">
                  <SubmitButton label="Login" />
                  <NavigationLink label="Voltar" to="/" />
                </div>
              </Form>
            )}

          </Formik>
        </div>

      </div>
    </LoginContainer>
  );
};

export default Login;
