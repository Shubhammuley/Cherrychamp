module.exports = function buildMakeUser({
  schemaValidator,
}) {
  return async function makeUser({
    ...userInfo
  }) {
    const {
      email,
      password
    } = await schemaValidator({ ...userInfo }, 'userSchema');

    return Object.freeze({
      getEmail: () => email.toLowerCase(),
      getPassword: () => password
    });
  };
};
