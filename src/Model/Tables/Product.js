const Sequelize = require('sequelize');
const database = require('../Conn/dbconn');
const Store = require("./Store");

const Product = database.define('product', {
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
    },
    price: {
        type: Sequelize.DOUBLE,
        allowNull: false,
        comment: 'Guarda o preço do produto'
    },
    description: {
        type: Sequelize.STRING,
        comment: 'Guarda a descricao do produto'
    },
    storeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        comment: 'Guarda o Id da loja que o produto pertence'
    }
});
Product.belongsTo(Store);
module.exports = Product;