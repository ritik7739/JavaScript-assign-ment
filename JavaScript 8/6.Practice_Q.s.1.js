let nums=[10,20,30,40,50];
let result=nums.every((ele)=>{
    return (ele%10==0);
});

console.log(result);


//Q.NO.2:- create a function to find minimum number in a array
let num=[1,3,4,5,6,9,0,-1];
function getMin(num){
let res=num.reduce((min,ele)=>{
    if(ele<min){
        return ele;
    }else{
        return min;
    }
});
  return res;
}

console.log(getMin(num));
