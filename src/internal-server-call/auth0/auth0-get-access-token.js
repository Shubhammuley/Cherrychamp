module.exports = function makeAuth0GetAccessToken({
  axios,
  config,
  InternalServerError,
}) {
  return async function auth0GetAccessToken({ ...details }) {
    return axios({
      method: 'post',
      url: `${config.serviceEndPoint.auth0}/oauth/token`,
      data: { ...details },
    }).then(({ status, data }) => {
      return data;
    }).catch((e) => {
    return e
    });
  };
};
