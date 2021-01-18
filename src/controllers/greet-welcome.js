/**
 *
 * @param greetWelcomeToService
 * @returns {function(*): {body: *, statusCode: number}}
*/
module.exports = function makeGreetWelcomeToService({
  greetWelcomeToService,
}) {
  return async function greetWelcome(httpRequest) {
    const message = greetWelcomeToService(httpRequest.app.getName());
    return {
      statusCode: 200,
      body: message,
    };
  };
};
