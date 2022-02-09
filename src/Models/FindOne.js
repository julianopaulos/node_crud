import Product from "./Tables/Product.js";

const select = {
    async products(id){
        return await Product.findByPk(id);
    }
};

export default select;