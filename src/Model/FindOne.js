const Product = require("./Tables/Product");

const select = {
    async products(id){
        return await Product.findByPk(id);
    }
};

module.exports = select;