const { Sequelize } = require('sequelize');
const config = require('./config/config');

const { username, password, database, host, dialect } = config.development;

const sequelize = new Sequelize(database, username, password, {
    host,
    dialect,
    pool: {
        max: 50,         // Max connections in pool
        min: 5,
        acquire: 30000,  // Max time in ms to acquire a connection
        idle: 10000      // Max time in ms before a connection is released
    }
});

module.exports = sequelize;
