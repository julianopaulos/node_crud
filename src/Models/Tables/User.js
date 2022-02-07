const Sequelize = require('sequelize');
const database = require('../Conn/dbconn');

const User = database.define('user', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'Guarda o nome completo do Usuário'
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        comment: 'Guarda o nome de usuário para login'
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'Guarda o e-mail do usuário'
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: 'Guarda a senha do usuário'
    },
    active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: 'Guarda o status do usuário (0 - desativado / 1 - ativo)'
    }
});

module.exports = User;