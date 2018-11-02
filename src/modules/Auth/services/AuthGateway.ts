import { default as Gateway } from '../../../utils/GatewayUtils';

class AuthGateway extends Gateway {
  login = (data: object) => (
    this.request('/login', data)
  ).then((response) => ({ ...response }))
}

export default AuthGateway;
