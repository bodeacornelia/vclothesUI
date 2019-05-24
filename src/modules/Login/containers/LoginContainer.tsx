import * as React from 'react';
import { connect } from 'react-redux';
import Login from '../components/Login';
import { login } from '../store/actions';

const LoginContainer = (props) => <Login {...props} />;

const mapStateToProps = (state) => ({

});

export default connect(mapStateToProps, {
  login
})(LoginContainer);