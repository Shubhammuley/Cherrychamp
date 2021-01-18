module.exports = function makeAuth0ListAllUser({
  axios,
  config,
}) {
  return async function auth0ListAllUser({ token }) {
    return axios({
      method: 'GET',
      url: `${config.serviceEndPoint.auth0UserManagement}users`,
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
