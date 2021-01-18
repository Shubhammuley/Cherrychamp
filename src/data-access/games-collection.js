module.exports = function makeGamesCollection({
    makeMongooseConnection,
    gameModel,
    InternalServerError,
  }) {
  async function listGames() {
    try {
      const projectQuery = {
        _id: 0,
        firstname: 1,
        lastname: 1,
      };
      const dbConnection = await makeMongooseConnection();
      const result = await gameModel({ dbConnection })
        .find({}, { ...projectQuery })
        .lean();
      return result;
    } catch ({ message: ErrorMessage, name: ErrorName }) {
      throw new InternalServerError('Something went wrong.', 'InternalDatabaseError', { ErrorName, ErrorMessage });
    }
  };

  async function insertMany (games) {
    try {
      const dbConnection = await makeMongooseConnection();
      const result = await gameModel({ dbConnection })
        .insertMany(games);
      return result;
    } catch ({ message: ErrorMessage, name: ErrorName }) {
      throw new InternalServerError('Something went wrong.', 'InternalDatabaseError', { ErrorName, ErrorMessage });
    }
  };
  return Object.freeze({
    listGames,
    insertMany,
  });
}