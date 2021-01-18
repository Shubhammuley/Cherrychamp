const { schemaValidator } = require('../../helpers/schema-validator');
const buildMakeUser = require('./user');

const makeUser = buildMakeUser({
  schemaValidator,
});

module.exports = Object.freeze({
  makeUser,
});
