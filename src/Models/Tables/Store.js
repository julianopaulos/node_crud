const Sequelize = require('sequelize');
const database = require('../Conn/dbconn');

const Store = database.define('store', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'Guarda o nome do produto'
    }
});

module.exports = Store;