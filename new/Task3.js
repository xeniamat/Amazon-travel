const VasyaInfo = {
    name: 'Vasya',
    address: {
        country: 'Belarus',
        city: 'Minsk',
    },
    phone: null,
    friends: ['Petya', 'Kolya', 'Sveta']
};

const result = [];

function writeValue(obj){
    const values = Object.values(obj);
    values.forEach(function (item){
        if (typeof item !== 'object'){
            result.push(item);
        } else {
            item === null
                ? result.push(item)
                : writeValue(item);
        }        
    } )
}

getValue(VasyaInfo);

console.log(result);