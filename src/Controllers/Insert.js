const database = require('../Models/Conn/dbconn');
const Insert = require('../Models/Insert');


const Inserts = {
    async product(conditions){
        
        return await Insert.product(...Object.values(conditions));
    },

    async store(conditions){
        return await Insert.store(...Object.values(conditions));
    }
}

module.exports = Inserts;