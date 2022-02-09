import Product from "./Tables/Product.js";
import Store from "./Tables/Store.js";

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

export default update;