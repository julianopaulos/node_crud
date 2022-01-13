const mysql = require('mysql2/promise');

const host = 'localhost';
const user = 'root';
const password = '';
const port = 3306;

const createConn = {
    async create() {
        try{
            const connection = await mysql.createConnection({ host, port, user, password });
            await connection.query(`CREATE DATABASE IF NOT EXISTS crud;`);
            console.log('banco criado');
        }catch(err){
            console.log(err);
        }
    }
};
module.exports = createConn;