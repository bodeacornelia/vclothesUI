import * as React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import { login, facebookLogin } from '../store/actions';

const LoginContainer = (props) => <Login {...props} />;

export default connect(null, {
  login,
  facebookLogin
})(LoginContainer);