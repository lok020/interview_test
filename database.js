const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('interview-db', 'user', 'password', {
    dialect: "sqlite",
    host: "./dev.sqlite"
    //host: ':memory:'              // for temp memory storage
});

module.exports = sequelize;