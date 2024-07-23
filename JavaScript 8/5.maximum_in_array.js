//calculate the maximum element of an array
let arr=[1,2,3,4,5,6,2,1,7,9,8];
let maxi=arr.reduce((max,ele)=>{
    if(ele>max){
        return ele;
    }else{
        return max;
    }
});

console.log(maxi);