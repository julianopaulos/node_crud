import Insert from '../Models/Insert.js';

const Inserts = {
    async user(conditions){
        return await Insert.user(...Object.values(conditions));
    },

    async product(conditions){
        
        return await Insert.product(...Object.values(conditions));
    },

    async store(conditions){
        return await Insert.store(...Object.values(conditions));
    }
}

export default Inserts;