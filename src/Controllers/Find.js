const {Op} = require('sequelize');
const database = require('../Models/Conn/dbconn');
const Store = require('../Models/Tables/Store');
const Insert = require('../Models/Insert');
const findAll = require('../Models/FindAll');
const Update = require('../Models/Update');
const Delete = require('../Models/Delete');
(async () => {
    await database.sync();
})();
const Find = {
    async allProducts(conditions){
        let {find, order, limit} = conditions;
        let where = {};
        if(find){
            find = find.replaceAll('[', '').replaceAll(']', '').split(',');
            let fields;
            let correspondings;
            let conditions = [];
            for(let i = 0; i < find.length; i++){
                
                if(i % 2 === 0){
                    fields = find[i];
                    correspondings = find[i+1];
                }else{
                    fields = find[i-1];
                    correspondings = find[i];
                }
                if(fields && correspondings){
                    conditions.push({[fields]: correspondings});
                }
            }
            console.log(...conditions);
            let field = find[0];
            let corresponding = find[1];
            where = {
                [field]: corresponding
            };
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