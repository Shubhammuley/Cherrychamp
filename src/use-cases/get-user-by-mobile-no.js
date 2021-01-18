module.exports = function makeGetUserByMobileNumber({
  auth0ListAllUser,
  auth0GetAccessToken,
  config,
}) {
  async function getUserByMobileNumber({
    phoneNumber,
  }) {
    try {
      const token = await auth0GetAccessToken({ 
        audience: config.serviceEndPoint.auth0UserManagement,
        client_id: 'c7FlR0qxnrTZakhM3ulfFJb1fZxJ9ZGU',
        client_secret: config.auth0.clientSecret,
        grant_type: 'client_credentials'
      });
      
      const usersList = await auth0ListAllUser({
        token: `Bearer ${token.access_token}`
      });
      const user = usersList.filter((item) => item.user_metadata && item.user_metadata.phone_number === phoneNumber)

      return user;
    } catch (err) {
      return err;
    }
  }
  return getUserByMobileNumber;
};
