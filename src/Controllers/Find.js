const {Op} = require('sequelize');
const database = require('../Models/Conn/dbconn');
const Store = require('../Models/Tables/Store');
const findAll = require('../Models/FindAll');
const Sanitizers = require("../Utils/FieldSanitizer");
(async () => {
    await database.sync();
})();
const Find = {
    async allProducts(conditions){
        let {find, order, limit} = conditions;
        let where = {};
        let countLimit = Number.parseInt(1844674407370955);
        let orderCondition = [];
        
        if(find){

            let conditions = find = Sanitizers.conditionFilter(find);
            
            conditions.forEach((value) => {
                let field = Object.keys(value)[0];
                let corresponding =  Object.values(value)[0];
                where[field] = corresponding;
            });
        }
        if(order){
            orderCondition = Sanitizers.orderSanitizer(order);
        }
        if(limit){
            countLimit = Number.parseInt(limit);
        }
        console.log('order ', orderCondition);
        return await findAll.products({
            include: Store,
            where: where,
            order: orderCondition,
            limit: countLimit
        });
    }
}

module.exports = Find;