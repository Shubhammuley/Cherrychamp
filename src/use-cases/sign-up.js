const { makeUser } = require('../entities/user');

module.exports = function makeUserSignUp({
  auth0SignUp,
  auth0GetUserByEmail,
  auth0GetAccessToken,
  ValidationError,
  config,
}) {
  async function getEmailUniqueness({
    email,
  }) {
    try {
      const token = await auth0GetAccessToken({ 
        audience: config.serviceEndPoint.auth0UserManagement,
        client_id: 'c7FlR0qxnrTZakhM3ulfFJb1fZxJ9ZGU',
        client_secret: config.auth0.clientSecret,
        grant_type: 'client_credentials'
      });
      
      const emailCheck = await auth0GetUserByEmail({
        email,
        token: `Bearer ${token.access_token}`
      });
      return emailCheck
    } catch (e) {
      return e;
    }
  }
  
  async function userSignUp({
    ...userInfo
  }) {
    try {
    const user = await makeUser({
      ...userInfo,
    });
    const emailUniqueness = await getEmailUniqueness({ email: user.getEmail() });
    if (emailUniqueness.length) {
      return new ValidationError( 'Email already exist', 'ValidationError');
    }
    // Register user on betprotocol
    // create wallet 

    const signUpUser = await auth0SignUp({
      email: user.getEmail(),
      password: user.getPassword(),
      client_id: config.auth0.clientId,
      connection: "Username-Password-Authentication",
    });

    return signUpUser;
    } catch (e) {
        return e;
    }
  }
  return userSignUp;
};
