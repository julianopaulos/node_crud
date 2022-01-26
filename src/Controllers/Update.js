const Update = require('../Models/Update');
const Changes = {
    async product(conditions){
        return await Update.product(...Object.values(conditions));
    }
};

module.exports = Changes;