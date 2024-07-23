function sum1toN(n){
    let sum=0;
    for(let i=1;i<=n;i++){
        sum+=i;
    }
    return sum;
}

console.log(sum1toN(3));

//OR different logic

function sum1_N(n){
    let sum= (n*(n+1))/2;
    return sum;
}

console.log(sum1_N(3));