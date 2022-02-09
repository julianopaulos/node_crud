import Product from "./Tables/Product.js";
import Store from "./Tables/Store.js";

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

export default deleteItem;