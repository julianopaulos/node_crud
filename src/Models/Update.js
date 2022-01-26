const Product = require("./Tables/Product");
const Store = require("./Tables/Store");

const update = {
    async product(id, name, price, description, storeId){
        console.log(id, name, price, description, storeId);
        return await Product.update({
                name,
                price,
                description,
                storeId
            },
            {where: {id: id}}
        );
    },

    async store(id, name){
        return await Store.update({name},{where: {id: id}});
    }
};

module.exports = update;