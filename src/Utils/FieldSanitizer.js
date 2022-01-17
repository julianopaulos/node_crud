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
        if(!typeof where === 'string') return [];

        let conditions = [];
        where = where.replaceAll('[', '').replaceAll(']', '').split(',');

        for(let i = 0; i < where.length; i++){
                
            if(i % 2 === 0){
                fields = where[i];
                correspondings = where[i+1];
            }else{
                fields = where[i-1];
                correspondings = where[i];
            }
            if(fields && correspondings && !verifyFieldExists({[fields]: correspondings}, conditions)){
                conditions.push({[fields]: correspondings});
            }
        }
        return conditions;
    }
};

module.exports = Functions;