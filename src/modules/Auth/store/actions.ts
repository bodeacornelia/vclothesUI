import AuthService from '../services/AuthService';

export const login = (data: any) => {
  AuthService.login(data)
    .then((token: string) => {
      localStorage.setItem('token', token)
    })
};
