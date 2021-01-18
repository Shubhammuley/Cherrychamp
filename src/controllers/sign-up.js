module.exports = function makeSignUpAction({
    signUp,
}) {
  return async function signUpAction(httpRequest) {
    const message = signUp({ ...httpRequest.body });
    return {
      statusCode: 200,
      body: message,
    };
  };
};
