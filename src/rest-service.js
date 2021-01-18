const {
  greetWelcome,
  getSearchAction,
  sendMessageAction,
  cleanPhoneIdAction,
  transloaditCropAction,
  signUpAction,
  getUserByEmailAction,
} = require('./controllers');
const makeHttpCallback = require('./http-server-callback/http-callback');

class RestService {
  constructor(router, logger) {
    this.router = router;
    this.logger = logger;
    this.appName = 'REST Application';
  }

  start() {
    const basePath = '/api';
    // define routes
    this.router.get(`${basePath}/`, makeHttpCallback({ controller: greetWelcome }));
    this.router.get(`${basePath}/health-check`, makeHttpCallback({ controller: greetWelcome }));
    this.router.get(`${basePath}/search/:search`, makeHttpCallback({ controller: getSearchAction }));
    this.router.post(`${basePath}/sendMessage/:phoneNumber`, makeHttpCallback({ controller: sendMessageAction }));
    this.router.get(`${basePath}/cleanPhoneId/:phoneNumber`, makeHttpCallback({ controller: cleanPhoneIdAction }));
    this.router.post(`${basePath}/crop`, makeHttpCallback({ controller: transloaditCropAction }));
    this.router.post(`${basePath}/signUp`, makeHttpCallback({ controller: signUpAction }));
    this.router.get(`${basePath}/userByEmail/:email`, makeHttpCallback({ controller: getUserByEmailAction }));

    }

  getName() {
    return this.appName;
  }
}

module.exports = { RestService };
