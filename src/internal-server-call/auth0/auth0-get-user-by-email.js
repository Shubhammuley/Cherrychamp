module.exports = function makeAuth0GetUserByEmail({
  axios,
  config,
}) {
  return async function auth0GetUserByEmail({ email, token }) {
    return axios({
      method: 'GET',
      url: `${config.serviceEndPoint.auth0UserManagement}users-by-email`,
      params: { email },
      headers: {
        'Authorization': token
      },
    }).then(({ status, data }) => {
      return data;
    }).catch((e) => {
      return e;
    });
  };
};
