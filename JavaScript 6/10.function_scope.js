let sum=54;            //Global scope

function calSum(a,b){
      let sum=a+b;     //function scope
      console.log(sum);
}

calSum(1,3);
console.log(sum);  //access the global variable from global scope