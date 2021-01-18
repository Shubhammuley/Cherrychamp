module.exports = function makeAuth0Signup({
  axios,
  config,
  InternalServerError,
}) {
  return async function auth0SignUp({ ...userDetails }) {
    return axios({
      method: 'post',
      url: `${config.serviceEndPoint.auth0}/dbconnections/signup`,
      data: { ...userDetails },
    }).then(({ status, data }) => {
      return data;
    }).catch(() => {
      throw InternalServerError('Something went wrong', 'InternalServerError');
    });
  };
};
