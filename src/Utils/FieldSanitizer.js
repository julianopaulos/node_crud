import { Op } from 'sequelize';

const Functions = {
    operatorSelect(operator){
        let condition;
        switch(operator){
            case ">":
                condition = Op.gt;
            break;
            case "<":
                condition = Op.lt;
            break;
            case ">=":
                condition = Op.gte;
            break;
            case "<=":
                condition = Op.lte;
            break;
            case "<>":
                condition = Op.ne;
            break;
            default:
                condition = Op.eq;
        }
        return condition;
    }
};

export default Functions;