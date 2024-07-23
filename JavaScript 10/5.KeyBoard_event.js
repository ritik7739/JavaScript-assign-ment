// let btn=document.querySelector('button');

//Event object for the detailed information with the associated event

// btn.addEventListener('click',function(event){
//     console.log(event);
//     console.log("button was clicked");
// });


let inp=document.querySelector("input");

// inp.addEventListener('keydown',function(event){
//     console.log("key=",event.key);
//     console.log("code=",event.code);
//     console.log("key pressed");
// });

// inp.addEventListener('keyup',function(){
//     console.log("key realsed");
// })


inp.addEventListener('keydown',function(event){
    console.log("code=",event.code);//ArrowUp,ArrowDown,ArrowRight,ArrowLeft
    if(event.code=="ArrowUp"){
        console.log("character is moving forward");
    }else if(event.code=="ArrowDown"){
        console.log("character is moving backward");
    }else if(event.code=="ArrowLeft"){
         console.log("character is moving Left");
    }else if(event.code=="ArrowRight"){
        console.log("character is moving Right");
    }
});