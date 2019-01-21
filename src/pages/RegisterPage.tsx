import * as React from 'react';
import LoginLayout from '../layout/LoginLayout';
import Register from 'modules/Register/components';

const LoginPage = (props: any) => (
  <LoginLayout
    render={
      <Register {...props} />
    }
  />);

export default LoginPage;
