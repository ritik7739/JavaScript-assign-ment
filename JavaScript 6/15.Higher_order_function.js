function multipleGreet(func,count){ //higher order function --> takes argument as a functions
    for(let i=1;i<=count;i++){
        func();
    }
}

let greet=function(){
    console.log("Hello");
}

multipleGreet(greet,10);//paasing function to the higher function
multipleGreet(function(){console.log('namaste')},4) //passing function along with defination 