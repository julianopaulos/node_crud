const Product = require("./Tables/Product");
const Store = require("./Tables/Store");

const update = {
    async product(id, name, price, description, idStore){
        const product = await Product.findByPk(id);
        product?.set({
            name,
            price,
            description,
            idStore
        });

        const result = await product?.save();
        console.log('update product ', result);
    },

    async store(id, name){
        const store = await Store.findByPk(id);

        store?.set({
            name
        });

        const result = await store?.save();
        console.log('update store ', result);
    }
};

module.exports = update;