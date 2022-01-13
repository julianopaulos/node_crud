const mysql = require('mysql2/promise');

const host = process.env.DB_HOST;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const port = process.env.DB_PORT;

const createConn = {
    async create() {
        try{
            const connection = await mysql.createConnection({ host, port, user, password });
            await connection.query(`CREATE DATABASE IF NOT EXISTS ${process.env.DB_NAME};`);
            console.log('banco criado');
        }catch(err){
            console.log(err);
        }
    }
};
module.exports = createConn;