import Update from '../Models/Update.js';
const Changes = {
    async product(conditions){
        const result = await Update.product(...Object.values(conditions));
        return Object.values(result).join(', ');
    },

    async store(conditions){
        const result = await Update.store(...Object.values(conditions));
        return Object.values(result).join(', ');
    }
};

export default Changes;