import RegisterService from "modules/Register/services/RegisterService";

export const registerUser = (payload) => (dispatch) => {
  RegisterService.registerUser(payload);
}