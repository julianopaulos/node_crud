import { Op } from 'sequelize';
import Store from '../Models/Tables/Store.js';
import findAll from '../Models/FindAll.js';
import Sanitizers from "../Utils/FieldSanitizer.js";

const Find = {
    async user(field, value){
        return await findAll.users({
            where: {
                [field]: value
            },
            limit: 1
        });
    },

    async allStores(conditions){
        let {name, id, like, order, limit, ascending} = conditions;
        let where = {};
        let countLimit = Number.parseInt(1844674407370955);
        let orderCondition = [];

        if(name){
            where.name = (like)?{[Op.like]:`%${name}%`}:name;
        }
        if(id){
            where.id = id;
        }
        
        if(order){
            orderCondition = [[order, (ascending ? 'ASC' : 'DESC')]];
        }
        
        if(limit){
            countLimit = Number.parseInt(limit);
        }
        
        return await findAll.stores({
            where: where,
            order: orderCondition,
            limit: countLimit
        });
    },

    async allProducts(conditions){
        let {find, order, limit} = conditions;
        let where = {};
        let countLimit = Number.parseInt(1844674407370955);
        let orderCondition = [];
        
        if(find){

            let conditions = find = Sanitizers.conditionFilter(find);
            
            conditions.forEach((condition) => {
                let field = Object.keys(condition)[0];
                let value =  Object.values(condition)[0];
                where[field] = value;
            });
        }
        if(order){
            orderCondition = Sanitizers.orderSanitizer(order);
        }
        if(limit){
            countLimit = Number.parseInt(limit);
        }
        
        return await findAll.products({
            include: Store,
            where: where,
            order: orderCondition,
            limit: countLimit
        });
    }
}

export default Find;