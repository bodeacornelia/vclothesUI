import { navigateTo } from 'modules/Menu/store/actions';

export const navigateToLoginPage = () => (dispatch) => {
  dispatch(navigateTo({ path: '/login' }));
}

export const navigateToRegisterPage = () => (dispatch) => {
  dispatch(navigateTo({ path: '/register' }));
}