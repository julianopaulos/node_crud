const Delete = require('../Models/Delete');

const Deletes = {
    async product(conditions){
        
        return await Delete.product(...Object.values(conditions));
    },

    async store(conditions){
        return await Delete.store(...Object.values(conditions));
    }
}

module.exports = Deletes;