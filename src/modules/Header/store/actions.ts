import { navigateTo } from 'modules/Menu/store/actions';
import { LOGIN, REGISTER } from 'constants/RouteConstants';

export const navigateToLoginPage = () => (dispatch) => {
  dispatch(navigateTo({ path: LOGIN }));
}

export const navigateToRegisterPage = () => (dispatch) => {
  dispatch(navigateTo({ path: REGISTER }));
}