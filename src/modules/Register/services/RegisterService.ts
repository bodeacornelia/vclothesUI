import RegisterGateway from './RegisterGateway';

class RegisterService {
  gateway: RegisterGateway;

  constructor() {
    this.gateway = new RegisterGateway();
  }

  registerUser = (payload) => {
    this.gateway.registerUser(payload);
  }
}

export default new RegisterService();