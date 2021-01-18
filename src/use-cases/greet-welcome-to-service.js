module.exports = function makeGreetWelcomeToService() {
  return function greetWelcomeToService(serviceName) {
    return `Welcome to ${serviceName} service`;
  };
};
