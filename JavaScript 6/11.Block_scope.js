{
    let a=25; //block scope variable 
}
// console.log(a);  //cann't access outside block scope


for(let i=0;i<=5;i++){
    console.log(i);                //i is a block variable
}
// console.log(i);                   //i is not accessiable outside the block scope


let age=23;
if(age>=18){
    let str="adult";            //str is a block scope variable 
    console.log(str);          
}

// console.log(str);  //str is a block scope variable



