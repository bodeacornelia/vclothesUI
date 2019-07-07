import UserGateway from './UserGateway';
import { User } from '../model/User';

class UserService {
  gateway: UserGateway;

  constructor() {
    this.gateway = new UserGateway();
  }

  authUser(): Promise<User> {
    return this.gateway.authUser()
      .then((data) => new User(data))
      .catch((error) => {
        return Promise.reject(error);
      });
  }
}

export default new UserService();