/**
 * @method
 * @param dbConnection
 * @returns {*}
 */
module.exports = function makeGamesModelConnection({ dbConnection }) {
  try {
    return dbConnection.model('Games');
  } catch (e) {
    const gamesSchema = new dbConnection.Schema({
        firstname: { type: String, trim: true },
        lastname: { type: String, trim: true },
    }, { collection: 'games' });
    return dbConnection.model('Games', gamesSchema);
  }
};
