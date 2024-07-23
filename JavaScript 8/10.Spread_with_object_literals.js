let data={
    email:"ironman@gmail.com",
    password:"abcd"
};
let dataCopy={...data,id:123};
console.log(dataCopy);


let arr=[5,6,7,8,9,10];         //arr have only value
let obj1={...arr};              //object have (key:value) pair  {key is the index of the array}
console.log(obj1);

let obj2={..."hello"};          
console.log(obj2);             

