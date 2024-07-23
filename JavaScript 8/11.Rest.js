function sums(){
    console.log(arguments);   //argument is by default collection of array/object in javascript
}
console.log(sums(1,2,3,4,5,6));

// function sum(){
//     return arguments.reduce((sum,ele)=>(sum+ele));  //we cann't use reduce method for argument
// }                                                 //argument is not array

// console.log(sum(1,2,3,4));

//to use reduce or any array method on argument  we spread the argument 
function sum(...args){
     return args.reduce((sum,ele)=>(sum+ele));
}

console.log((sum(1,2,3,4)));