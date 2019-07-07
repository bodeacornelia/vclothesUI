import { default as Gateway } from '../../../utils/GatewayUtils';
import * as API_ENDPOINTS from 'constants/ApiConstants';

export default class AuthGateway extends Gateway {
  constructor() {
    super();
  }

  login = (data) => this.request(API_ENDPOINTS.LOGIN, data)
    .then((response) => ({ ...response }))

  facebookLogin = () => this.request(API_ENDPOINTS.FACEBOOK_LOGIN)
    .then((response) => ({ ...response }))
}
