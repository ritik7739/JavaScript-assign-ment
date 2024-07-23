//sum fuunction with default value
function sum(a,b=2){
      return a+b;
}

console.log(sum(3));


function sub(a=2,b){   //a=2, b=undefined/NaN
    return a-b;
}
console.log(sub(1));//NaN  1 is assigned to 'a'.