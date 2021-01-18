const {
  ValidationError,
} = require('utilities').exceptions;
const makeFileValidator = require('./file-upload-validator');

const fileValidator = makeFileValidator({
  ValidationError,
});

module.exports = Object.freeze({
  fileValidator,
});
