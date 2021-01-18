const Mongoose = require('mongoose');
const { InternalServerError } = require('utilities').exceptions;
const { mongo } = require('../config/environments');
// require mongoose module

const options = Object.freeze({
  autoIndex: false, // Don't build indexes
  poolSize: 1, // Maintain up to 1 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
Mongoose.set('debug', mongo.debug || false);
function getMongoDbConnectionUrl() {
  const credentials = mongo.username ? `${mongo.username}:${mongo.password}@` : '';
  return `mongodb+srv://shubham:muley@cluster0.xauzm.mongodb.net/algoliaNameSearchDb?retryWrites=true&w=majority`;
}
const makeMongooseConnection = async () => {
  if (Mongoose.connection.readyState) {
    return Mongoose;
  }
  await Mongoose.connect(getMongoDbConnectionUrl(), options);
  // eslint-disable-next-line no-console
  console.info(`Worker ${process.pid} connected to Mongo Database`);
  return Mongoose;
};

const gameModel = require('../models/games.model');
const makeGamesCollection = require('./games-collection');

const gamesCollection = makeGamesCollection({
  makeMongooseConnection,
  gameModel,
  InternalServerError,
});

module.exports = Object.freeze({
  gamesCollection,
});
