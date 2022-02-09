import Sequelize from 'sequelize';
import 'dotenv/config';

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;

const database_connection = new Sequelize(process.env.DB_NAME, user, password, {dialect: 'mysql', host: host, port: port});

export default database_connection;