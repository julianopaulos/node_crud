import { Op } from 'sequelize';

function verifyFieldExists(obj, arr){
    let occurences = 0;
    for(let i = 0; i < arr.length; i++){
        if(Object.keys(obj)[0] === Object.keys(arr[i])[0]){
            occurences++;
        }
    }
    return (occurences > 0) ? true : false;
}

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
        }
        return condition;
    }
};

export default Functions;