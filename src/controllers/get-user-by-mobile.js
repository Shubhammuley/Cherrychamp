module.exports = function makeGetUserByMobileNumberAction({
    getUserByMobileNumber,
}) {
  return async function getUserByMobileNumberAction(httpRequest) {
    const message = getUserByMobileNumber({ phoneNumber: httpRequest.params.phoneNumber });
    return {
      statusCode: 200,
      body: message,
    };
  };
};
