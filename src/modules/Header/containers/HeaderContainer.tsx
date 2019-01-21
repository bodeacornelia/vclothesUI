import * as React from 'react';
import { connect } from 'react-redux';
import { navigateToLoginPage, navigateToRegisterPage } from '../store/actions';
import Header from '../components/Header';

const HeaderContainer = (props: any) => <Header {...props} />

const mapStateToProps = (state: any) => ({});

export default connect(mapStateToProps, {
  navigateToLoginPage,
  navigateToRegisterPage
})(HeaderContainer);