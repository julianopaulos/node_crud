const Update = require('../Models/Update');
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

module.exports = Changes;