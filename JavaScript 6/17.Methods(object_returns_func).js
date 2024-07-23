let calculator={
    num:55,
    add:function(a,b){
        return a+b;
    },
    sub:function(a,b){
        return a-b;
    },
    mul:function(a,b){
        return a*b;
    }
}

console.log(calculator);
console.log(calculator.num);
console.log(calculator.add);
console.log(calculator.sub);
console.log(calculator.mul);
console.log(calculator.add(3,4));
console.log(calculator.sub(5,4));