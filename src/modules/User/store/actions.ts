import UserService from '../services/UserService';

export const authUser = () => (dispatch) => {
  UserService.authUser();
}