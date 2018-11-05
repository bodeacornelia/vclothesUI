class Auth {
  static getToken(): string {
    return localStorage.getItem('token');
  }
}

export default Auth;
