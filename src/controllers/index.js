// import use-cases for assignment to controllers
const {
  greetWelcomeToService,
  getSearch,
  sendMessage,
  cleanPhoneId,
  transloaditCrop,
  signUp,
  getUserByEmail,
  getUserByMobileNumber
} = require('../use-cases');

// define all make actions
const makeGreetWelcomeToService = require('./greet-welcome');
const makeGetSearchAction = require('./algolia-search');
const makeSendMessageAction = require('./send-message');
const makeCleanPhoneIdAction = require('./clean-phoneid');
const makeTransloaditCropAction =  require('./transloadit-crop');
const makeSignUpAction = require('./sign-up');
const makeGetUserByEmailAction = require('./get-user-by-email');
const makeGetUserByMobileNumberAction = require('./get-user-by-mobile');
// generate actions
const greetWelcome = makeGreetWelcomeToService({
  greetWelcomeToService,
});

const sendMessageAction = makeSendMessageAction({ sendMessage });
const getSearchAction = makeGetSearchAction({ getSearch });
const cleanPhoneIdAction = makeCleanPhoneIdAction({ cleanPhoneId });
const transloaditCropAction = makeTransloaditCropAction({ transloaditCrop });
const signUpAction = makeSignUpAction({ signUp });
const getUserByEmailAction = makeGetUserByEmailAction({ getUserByEmail });
const getUserByMobileNumberAction = makeGetUserByMobileNumberAction({ getUserByMobileNumber });

module.exports = Object.freeze({
  greetWelcome,
  getSearchAction,
  sendMessageAction,
  cleanPhoneIdAction,
  transloaditCropAction,
  signUpAction,
  getUserByEmailAction,
  getUserByMobileNumberAction,
});
