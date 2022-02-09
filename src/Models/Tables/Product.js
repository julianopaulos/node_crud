import { INTEGER, STRING, DOUBLE } from 'sequelize';
import database from '../Conn/dbconn.js';
import Store from "./Store.js";

const Product = database.define('product', {
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
    },
    price: {
        type: DOUBLE,
        allowNull: false,
        comment: 'Guarda o preço do produto'
    },
    description: {
        type: STRING,
        comment: 'Guarda a descricao do produto'
    },
    storeId: {
        type: INTEGER,
        allowNull: false,
        comment: 'Guarda o Id da loja que o produto pertence'
    }
});
Product.belongsTo(Store);
export default Product;