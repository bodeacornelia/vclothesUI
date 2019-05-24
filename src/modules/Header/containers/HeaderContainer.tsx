import * as React from 'react';
import { connect } from 'react-redux';
import { navigateToLoginPage, navigateToRegisterPage } from '../store/actions';
import Header from '../components/Header';

const HeaderContainer = (props) => <Header {...props} />

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {
  navigateToLoginPage,
  navigateToRegisterPage
})(HeaderContainer);