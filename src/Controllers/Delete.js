import Delete from '../Models/Delete.js';

const Deletes = {
    async product(conditions){
        
        return await Delete.product(...Object.values(conditions));
    },

    async store(conditions){
        return await Delete.store(...Object.values(conditions));
    }
}

export default Deletes;