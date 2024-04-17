const AuthService = {
  login(username: string, password: string) {
    localStorage.setItem('token', window.btoa(`${username}:${password}`));
  },

  logout() {
    localStorage.removeItem('token');
  },

  isLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  },
};

export default AuthService;
