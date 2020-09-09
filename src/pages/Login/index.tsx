import React from 'react';
import { Field, Form, Formik,  } from 'formik';
import { LoginContainer } from './styles';
import { LoginInformation } from './type';
import { login } from '../../services/service';
import { Label, InputText } from '../../components/styled/forms';
import Flor from '../../assets/images/flor.svg';
import { Title } from '../../components/styled/display';
import SubmitButton from '../../components/SubmitButton';
import NavigationLink from '../../components/NavigationLink';

const Login = () => {

    const initialValues:LoginInformation = { 
                            username: "",
                            password: ""
                        };

    const loginHandler = (values:LoginInformation) => {
        login(values);
    };

    return(
        <LoginContainer>
            <div className="main">

                <div className="logo-container">
                    <img src={Flor} alt="Flor de decoração"/>
                    <Title size="8">Vitrine Tribal</Title>
                </div>

                <div className="form-container">
                    <Title size="6">Login</Title>

                    <Formik 
                        initialValues={initialValues} 
                        onSubmit={(values, formikHelpers) => {
                            loginHandler(values);
                        }}
                    >
                        {({ values }) => (
                            <Form>
                                <div className="fields">
                                    <Label>Nome do usuário</Label>
                                    <Field name="username" as={InputText} />
                                    <Label>Senha</Label>
                                    <Field name="password" as={InputText} type="password" />
                                </div>
                                <div className="buttons">
                                    <SubmitButton label="Login"/>
                                    <NavigationLink label="Voltar" to="/"/>
                                </div>
                            </Form>
                        )}                      

                    </Formik>
                </div>

            </div>
        </LoginContainer>
    );
}

export default Login;