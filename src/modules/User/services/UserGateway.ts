import Gateway from "utils/GatewayUtils";
import { USER_ME } from 'constants/ApiConstants'

class UserGateway extends Gateway {
  authUser = () => this.request(USER_ME)
    .then((response) => ({ response }))
}

export default UserGateway;