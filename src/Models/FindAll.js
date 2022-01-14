const Product = require("./Tables/Product");
const Store = require("./Tables/Store");

const select = {
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