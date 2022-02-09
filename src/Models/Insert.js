import hashSync from 'bcryptjs';

import Product from "./Tables/Product.js";
import Store from "./Tables/Store.js";
import User from "./Tables/User.js";

const insert = {
    async user(name, username, email, password) {
        password = hashSync(password, 10);
        return await User.create({
            name,
            username,
            email,
            password
        });
    },

    async product(name, price, description, storeId){
        return await Product.create({
            name,
            price,
            description,
            storeId
        });
    },

    async store(name){
        return await Store.create({name});
    }
};

export default insert;