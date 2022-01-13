const Sequelize = require('sequelize');
require('dotenv/config');

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;
console.log(host, user, password,port );
const sequelize = new Sequelize(process.env.DB_NAME, user, password, {dialect: 'mysql', host: host, port: port});

module.exports = sequelize;