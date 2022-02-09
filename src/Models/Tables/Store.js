import { INTEGER, STRING } from 'sequelize';
import database from '../Conn/dbconn.js';

const Store = database.define('store', {
    id: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: STRING,
        allowNull: false,
        comment: 'Guarda o nome do produto'
    }
});

export default Store;