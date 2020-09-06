/** 
 * Authentication Class
 * This will keep the auth state
 * I am not using cookies
 * So in memory
*/

class Auth {
  authenticated = false;

  login = (cb) => {
    this.authenticated = true;
    console.log('logged in');
    cb && cb();
  }
  logout = (cb) => {
    this.authenticated = false;
    console.log('logged out');
    cb && cb();
  }
  isAuthenticated = () => {
    return this.authenticated;
  }
}

export default new Auth();