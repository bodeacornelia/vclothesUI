import { default as Gateway } from '../../../utils/GatewayUtils';

export default class AuthGateway extends Gateway {
  constructor() {
    super();
  }

  login = (data) => this.request('/login', data)
    .then((response) => ({ ...response }))

  facebookLogin = () => this.request('/facebook-login')
    .then((response) => ({ ...response }))
}
