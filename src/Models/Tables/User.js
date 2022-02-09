import { INTEGER, STRING, BOOLEAN } from 'sequelize';
import database from '../Conn/dbconn.js';

const User = database.define('user', {
    id: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: STRING,
        allowNull: false,
        comment: 'Guarda o nome completo do Usuário'
    },
    username: {
        type: STRING,
        allowNull: false,
        unique: true,
        comment: 'Guarda o nome de usuário para login'
    },
    email: {
        type: STRING,
        allowNull: false,
        comment: 'Guarda o e-mail do usuário'
    },
    password: {
        type: STRING,
        allowNull: false,
        comment: 'Guarda a senha do usuário'
    },
    active: {
        type: BOOLEAN,
        allowNull: false,
        defaultValue: true,
        comment: 'Guarda o status do usuário (0 - desativado / 1 - ativo)'
    }
});

export default User;