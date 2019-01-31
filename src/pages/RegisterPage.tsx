import * as React from 'react';
import LoginLayout from '../layout/LoginLayout';
import RegisterContainer from 'modules/Register/containers/RegisterContainer';

const LoginPage = (props: any) => (
  <LoginLayout
    render={
      <RegisterContainer {...props} />
    }
  />);

export default LoginPage;
