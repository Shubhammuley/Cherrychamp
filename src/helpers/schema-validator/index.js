// import third-party libraries
const joi = require('@hapi/joi');
const _ = require('lodash');
// import errors
const { ValidationError, InternalServerError } = require('utilities').exceptions;
// import schemas
const objectIdValidation = require('../../validation-schemas/object-id-validation.model')(joi);
const objectIdArrayValidation = require('../../validation-schemas/object-id-array-validation.model')(joi);
const userSchema = require('../../validation-schemas/user.model')(joi);
// validation options for joi
const validationOptions = {
  abortEarly: false, // abort after the last validation error
  allowUnknown: true, // allow unknown keys that will be ignored
  stripUnknown: true, // remove unknown keys from the validated data
};
// create a object of schemas
const schemas = Object.create({
  objectIdValidation,
  objectIdArrayValidation,
  userSchema
});

/**
 *
 * @param object {!Object} that need to be validated
 * @param schemaName {!String} name of schema to be validated against
 * @returns {Promise<unknown>}
*/
const schemaValidator = (object, schemaName) => new Promise((resolve, reject) => {
  if (!object) {
    reject(new ValidationError('Invalid parameters passed.', 'ValidationError'));
  }
  if (!schemaName) {
    reject(new InternalServerError('Something went wrong.', 'InternalServerError'));
  }
  // validate the object with specified schema type
  const { error, value } = schemas[schemaName].validate(object, validationOptions);

  if (error) {
    // extract the multiple error in array
    let extractedError = _.map(error.details, ({ message }) => (message.replace(/['"]/g, '')));
    extractedError = [...new Set(extractedError)];
    reject(new ValidationError(JSON.stringify(extractedError), 'ValidationError'));
  }
  resolve(value);
});

module.exports = Object.create({
  schemaValidator,
});
