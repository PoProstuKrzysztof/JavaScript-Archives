function sum(a,b){
    return a+b;
}

console.log(sum(1,2));

const operation = function(a,b){
    return a * b;
}

console.log(operation(1,2));
operation = sum;

let filter = val => val === 3;
console.log(filter(3));
let arr = [2,3,4,5,6,7];
function select(Array, filter){
    let result = [];
    for(let item of array){
        if(filter(item)){
            result.push(item);
        }
    }
    return result;
}

console.log(select(arr,filter));


function Car(prodYear, model,brand){
    this.prodYear = prodYear;
    this.model = model;
    this.brand = brand;
}

let car = new Car(2020,'Audi4','Audi');

function varargs(){
    for(let item of arguments){
        sum += item;
    }
    return sum;
}
