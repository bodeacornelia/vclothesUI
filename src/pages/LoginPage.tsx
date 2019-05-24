import * as React from 'react';
import LoginContainer from '../modules/Login/containers/LoginContainer';
import LoginLayout from '../layout/LoginLayout';

const LoginPage = (props) => (
  <LoginLayout
    render={
      <LoginContainer {...props} />
    }
  />);

export default LoginPage;
