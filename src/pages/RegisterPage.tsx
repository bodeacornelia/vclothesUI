import * as React from 'react';
import LoginLayout from '../layout/LoginLayout';
import RegisterContainer from 'modules/Register/containers/RegisterContainer';

const LoginPage = (props) => (
  <LoginLayout
    render={
      <RegisterContainer {...props} />
    }
  />);

export default LoginPage;
