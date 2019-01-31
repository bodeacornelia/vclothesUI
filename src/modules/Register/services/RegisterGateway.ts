import Gateway from "utils/GatewayUtils";

class RegisterGateway extends Gateway {
  registerUser = (data: any) => this.request('/users.add', data)
    .then((response) => ({ response }))
}

export default RegisterGateway;