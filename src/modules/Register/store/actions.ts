import RegisterService from "modules/Register/services/RegisterService";

export const registerUser = (payload: any) => (dispatch: any) => {
  RegisterService.registerUser(payload);
}