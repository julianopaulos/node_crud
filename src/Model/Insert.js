const Product = require("./Tables/Product");
const Store = require("./Tables/Store");

const insert = {
    async product(name, price, description, storeId){
        await Product.create({
            name,
            price,
            description,
            storeId
        });
    },

    async store(name){
        await Store.create({name});
    }
};

module.exports = insert;