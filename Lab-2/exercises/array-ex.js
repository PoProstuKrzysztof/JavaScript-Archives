let arr1 = ['adam','ewa','karol'];

let r1 = arr1.filter(item => item.endsWith("a")).map(item => item.toUpperCase());

console.log(r1);

let arr2 = [2,5,7,2,3,6];


let filter1 = arr2
.filter(item => item % 3 > 0)
.map(i => i * i)
.join(", ");

filter2 = arr2.reduce((a, i) => a += i, 0);
console.log(filter1);

arr1.forEach((item,index,arr) => {console.log(index,item,arr.length);});

let numberGreaterThan5Filter = arr2.filter((number,index,arr) => number > 5 && index > arr.length/2 )


