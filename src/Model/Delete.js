const Product = require("./Tables/Product");
const Store = require("./Tables/Store");

const deleteItem = {
    async product(id){

        //await Product.destroy({ where: { id: 1 }});

        const product = await Product.findByPk(id);
        //só excluí se for encontrado
        await product?.destroy();
    },

    async store(id){
        const store = await Store.findByPk(id);

        await store?.destroy();
    }
}

module.exports = deleteItem;