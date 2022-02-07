const bcrypt = require('bcryptjs');

const Product = require("./Tables/Product");
const Store = require("./Tables/Store");
const User = require("./Tables/User");

const insert = {
    async user(name, username, email, password) {
        password = bcrypt.hashSync(password, 10);
        return await User.create({
            name,
            username,
            email,
            password
        });
    },

    async product(name, price, description, storeId){
        return await Product.create({
            name,
            price,
            description,
            storeId
        });
    },

    async store(name){
        return await Store.create({name});
    }
};

module.exports = insert;