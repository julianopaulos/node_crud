const Product = require("./Tables/Product");
const Store = require("./Tables/Store");
const User = require("./Tables/User");

const select = {
    async users(conditions){
        let users = [];
        let procuctsObj = await User.findAll({
            ...conditions
        });
        procuctsObj.forEach((product) => {
            users.push(product.dataValues);
        });
        
        return users;
    },

    async products(conditions){
        let products = [];
        let procuctsObj = await Product.findAll({
            ...conditions
        });
        procuctsObj.forEach((product) => {
            products.push(product.dataValues);
        });
        
        return products;
    },

    async stores(conditions){
        let stores = [];
        let storesObj = await Store.findAll({
            ...conditions
        })
        storesObj.forEach((store) => {
            stores.push(store.dataValues);
        });

        return stores;
    }
};

module.exports = select;