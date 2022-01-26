const Product = require("./Tables/Product");
const Store = require("./Tables/Store");

const update = {
    async product(id, name, price, description, storeId){
        /*const product = await Product.findByPk(id);
        product?.set({
            name,
            price,
            description,
            idStore
        });

        const result = await product?.save();*/
        console.log(id, name, price, description, storeId);
        const result = await Product.update({
            name: name,
            price: price,
            description: description,
            storeId: storeId
        }, {
            where: {
                id: id
            }
        });
        console.log('update product ', result);
        return result;
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