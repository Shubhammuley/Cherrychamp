module.exports = function makeCleanPhoneIdAction({
    cleanPhoneId,
}) {
  return async function cleanPhoneIdAction(httpRequest) {
    const toSearch = {
        phoneNumber: httpRequest.params.phoneNumber,
    };
    const message = cleanPhoneId({ toSearch });
    return {
      statusCode: 200,
      body: message,
    };
  };
};
