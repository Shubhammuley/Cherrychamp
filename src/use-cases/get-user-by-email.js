module.exports = function makeGetUserByEmail({
  auth0GetUserByEmail,
  auth0GetAccessToken,
  config,
}) {
  async function getUserByEmail({
    email,
  }) {
    try {
      const token = await auth0GetAccessToken({ 
        audience: config.serviceEndPoint.auth0UserManagement,
        client_id: 'c7FlR0qxnrTZakhM3ulfFJb1fZxJ9ZGU',
        client_secret: config.auth0.clientSecret,
        grant_type: 'client_credentials'
      });
      
      const userDetails = await auth0GetUserByEmail({
        email,
        token: `Bearer ${token.access_token}`
      });
      return userDetails;
    } catch (e) {
      return e;
    }
  }
  return getUserByEmail;
};
