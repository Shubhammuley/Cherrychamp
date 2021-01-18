module.exports = function makeGetUserByEmailAction({
    getUserByEmail,
}) {
  return async function getUserByEmailAction(httpRequest) {
    const message = getUserByEmail({ email: httpRequest.params.email });
    return {
      statusCode: 200,
      body: message,
    };
  };
};
