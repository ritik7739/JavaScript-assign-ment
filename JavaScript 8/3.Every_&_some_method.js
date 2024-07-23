//every functions returns ---->true/false

let nums=[1,2,3,4];
let result=nums.every((ele)=>{
    return(ele%2==0);
});

console.log(result);

//some functions returns -----> true/false (if any single condition become true than return true);

let num=[2,3,5,7];

let res=num.some((ele)=>{
    return (ele%2==0);
});

console.log(res);