import AuthService from '../services/AuthService';
import Auth from '../../../utils/AuthenticationUtils';
import { navigateTo } from '../../Menu/store/actions';

export const login = (payload) => (dispatch) => {
  AuthService.login(payload).then((token) => { Auth.setToken(token); })

  if (Auth.getToken()) {
    dispatch(navigateTo({ path: '/home' }))
  }
};

export const facebookLogin = () => (dispatch) => {
  AuthService.facebookLogin().then((token) => { Auth.setToken(token); })

  if (Auth.getToken()) {
    dispatch(navigateTo({ path: '/home' }))
  }
};
