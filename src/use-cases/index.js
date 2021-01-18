const algoliasearch = require('algoliasearch');
const _  = require('lodash')
const TeleSignSDK = require('telesignsdk');
const Transloadit = require('transloadit');
const path = require('path');
const fs = require('fs');
const stream = require('stream');
const { ValidationError } = require('utilities').exceptions;
const config = require('../config/environments');
const {
  auth0SignUp,
  auth0GetUserByEmail,
  auth0GetAccessToken,
  auth0ListAllUser,
} = require('../internal-server-call/auth0');
const { gamesCollection } = require('../data-access');
const makeGetSearch = require('./algolia-search');
const makeGreetWelcomeToService = require('./greet-welcome-to-service');
const makeSendMessage = require('./Send-message');
const makeCleanPhoneId = require('./clean-phoneid');
const makeTransloaditCrop = require('./transloadit-crop');
const makeUserSignUp = require('./sign-up');
const makeGetUserByEmail = require('./get-user-by-email');
const makeGetUserByMobileNumber = require('./get-user-by-mobile-no');

const greetWelcomeToService = makeGreetWelcomeToService();

const getSearch = makeGetSearch({
  algoliasearch,
  gamesCollection,
  _
});

const sendMessage = makeSendMessage({
  TeleSignSDK,
});

const cleanPhoneId = makeCleanPhoneId({
  TeleSignSDK,
});

const transloaditCrop = makeTransloaditCrop({
  Transloadit,
  path,
  fs,
  stream,
});

const signUp = makeUserSignUp({
  ValidationError,
  auth0SignUp,
  auth0GetUserByEmail,
  auth0GetAccessToken,
  config,
});

const getUserByEmail = makeGetUserByEmail({
  auth0GetUserByEmail,
  auth0GetAccessToken,
  config,
});

const getUserByMobileNumber = makeGetUserByMobileNumber({
  auth0ListAllUser,
  auth0GetAccessToken,
  config,
});

module.exports = Object.freeze({
  greetWelcomeToService,
  getSearch,
  cleanPhoneId,
  sendMessage,
  transloaditCrop,
  signUp,
  getUserByEmail,
  getUserByMobileNumber,
});
