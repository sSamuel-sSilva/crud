const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('crud', 'postgres', '1234', {
    host: 'localhost',
    dialect: 'postgres'
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.User = require('./user')(sequelize, Sequelize);
module.exports = db;
