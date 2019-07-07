import Gateway from "utils/GatewayUtils";
import { USER_ADD } from 'constants/ApiConstants'

class RegisterGateway extends Gateway {
  registerUser = (data) => this.request(USER_ADD, data)
    .then((response) => ({ response }))
}

export default RegisterGateway;