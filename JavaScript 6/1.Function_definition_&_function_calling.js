//function definition
function helloWorld(){
    console.log("Hello World");
}

function printName(){
   console.log("Ritik Singh");
   console.log("Nsec");
}

function print1to5(){
    for(let i=0;i<5;i++){
        console.log(i);
    }
}

function isAdult(){
    let age=18;
    if(age>=18){
        console.log("Adult");
    }
    else{
        console.log("Not Adult");
    }
}

//Function Calling

helloWorld();
printName();
print1to5();
isAdult();