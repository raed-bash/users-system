class AuthHelpers {
  getJWT() {
    let jwt = localStorage.getItem("JWT");
    return jwt;
  }
}
const authHelpers = new AuthHelpers();
export default authHelpers;
