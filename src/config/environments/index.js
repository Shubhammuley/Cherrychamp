// get env from command line arguments
const ENV = process.env && process.env.NODE_ENV ? process.env.NODE_ENV : 'development';
// require environment configuration file based on env variable
// eslint-disable-next-line import/no-dynamic-require
const config = require(`./${ENV}`);
module.exports = config;
