const {Op} = require('sequelize');
const database = require('../Models/Conn/dbconn');
const Store = require('../Models/Tables/Store');
const Insert = require('../Models/Insert');
const findAll = require('../Models/FindAll');
const Update = require('../Models/Update');
const Delete = require('../Models/Delete');
const Sanitizers = require("../Utils/FieldSanitizer");
(async () => {
    await database.sync();
})();
const Find = {
    async allProducts(conditions){
        let {find, order, limit} = conditions;
        let where = {};

        if(find){

            let conditions = find = Sanitizers.conditionFilter(find);
            
            conditions.forEach((value) => {
                let field = Object.keys(value)[0];
                let corresponding =  Object.values(value)[0];
                where[field] = corresponding;
            });
        }
        if(limit){
            
        }
        
        return await findAll.products({
            include: Store,
            where: where
        });
        /*where:{
                description: {[Op.like]:'Monitor%'}
            }, */
    }
}

module.exports = Find;