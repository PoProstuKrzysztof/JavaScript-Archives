let sums = 0;

let obj = {
    a: 34,
    b: "xxx",
    fun: function(){
        return null;
    }
}

obj.arr=[1,2,6,"abcd"]

function findArraySum(obj){
    let sum = 0;
    for(let prop in obj){
        if(obj[prop] instanceof Array){
            for(let value of obj[prop]){
                if(typeof value === 'number'){
                    sum += value;
                }
            }
            return sum
        }
    }
    return undefined;
}



console.log(findArraySum(obj));




