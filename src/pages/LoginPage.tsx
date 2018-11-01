import * as React from 'react';
import Login from '../modules/Auth/components/Login';
import LoginLayout from '../layout/LoginLayout';

const LoginPage = (props: any) => (
  <LoginLayout
    render={
      <Login {...props} />
    }
  />);

export default LoginPage;
