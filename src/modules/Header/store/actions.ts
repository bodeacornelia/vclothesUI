import { navigateTo } from 'modules/Menu/store/actions';

export const navigateToLoginPage = () => (dispatch: any) => {
  dispatch(navigateTo({
    path: '/login',
    keys: {},
    options: {},
  }));
}

export const navigateToRegisterPage = () => (dispatch: any) => {
  dispatch(navigateTo({
    path: '/register',
    keys: {},
    options: {},
  }));
}