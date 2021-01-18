const axios = require('axios');
const {
  InternalServerError,
} = require('utilities').exceptions;

const config = require('../../config/environments');
const makeAuth0Signup = require('./auth0-signup');
const makeAuth0GetUserByEmail = require('./auth0-get-user-by-email');
const makeAuth0GetAccessToken = require('./auth0-get-access-token');

const auth0SignUp = makeAuth0Signup({
  axios,
  config,
  InternalServerError,
});

const auth0GetUserByEmail = makeAuth0GetUserByEmail({
  axios,
  config,
  InternalServerError,
});

const auth0GetAccessToken = makeAuth0GetAccessToken({
  axios,
  config,
  InternalServerError,
});

module.exports = Object.freeze({
  auth0SignUp,
  auth0GetUserByEmail,
  auth0GetAccessToken,
});
