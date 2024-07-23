//return keyword
function sum(a,b){
    console.log("hello");
    console.log("hello");
    return a+b;
    //below line of code not executed
    console.log("hello2");
    console.log("hello3");
}

console.log(sum(1,2));
console.log(sum(3,4));


function isAdult(age){
    if(age>=18){
        return "Adult";
    }
    else{
        return "not Adult";
    }
}

console.log(isAdult(13));
console.log(isAdult(20));