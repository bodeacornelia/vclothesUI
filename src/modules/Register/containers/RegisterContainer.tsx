import * as React from 'react';
import Register from '../components';
import { connect } from 'react-redux';
import { registerUser } from '../store/actions';

const RegisterContainer = (props) => <Register {...props} />

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { registerUser })(RegisterContainer);