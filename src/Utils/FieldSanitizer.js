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
    conditionFilter(where){
        if(typeof where !== 'string') return [];

        let conditions = [];
        let field;
        let value;

        where = where.replaceAll('[', '').replaceAll(']', '').split(',');
        for(let i = 0; i < where.length; i++){
                
            if(i % 2 === 0){
                field = where[i];
                value = where[i+1];
            }else{
                field = where[i-1];
                value = where[i];
            }
            if(field && value && !verifyFieldExists({[field]: value}, conditions)){
                conditions.push({[field]: value});
            }
        }
        return conditions;
    },
    orderSanitizer(order){
        order = order.replaceAll('[', '').replaceAll(']', '').replaceAll(' ', '').split(',');
        return [order];
    }
};

export default Functions;