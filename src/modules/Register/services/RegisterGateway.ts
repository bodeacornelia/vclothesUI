import Gateway from "utils/GatewayUtils";

class RegisterGateway extends Gateway {
  registerUser = (data) => this.request('/users.add', data)
    .then((response) => ({ response }))
}

export default RegisterGateway;