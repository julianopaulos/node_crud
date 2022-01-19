const Product = require("./Tables/Product");
const Store = require("./Tables/Store");

const deleteItem = {
    async product(id){
        
        /*const product = await Product.findByPk(id);
        //só excluí se for encontrado
        return await product?.destroy();*/

        return await Product.destroy({ where: { id: id }});
    },

    async store(id){
        /*const store = await Store.findByPk(id);
        return await store?.destroy();*/
        
        return await Store.destroy({ where: { id: id }});
    }
}

module.exports = deleteItem;