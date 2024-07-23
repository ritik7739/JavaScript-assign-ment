let btns=document.querySelectorAll('button');
 

//only one function is excuted which in last that is sayName {i.e.both function not executed}
// for(btn of btns){
//     console.dir(btn);
//     btn.onclick=sayHello;
//     btn.onclick=sayName;
// }


//for the execution of both the functions we use addEventLister
for(btn of btns){
    console.dir(btn);
    // btn.addEventListener('click',sayHello);
    // btn.addEventListener('click',sayName);
    btn.addEventListener('dblclick',function(){
        console.log("you double clicked me!!");
    })
}

function sayHello(){
    alert("Hello !!");
}

function sayName(){
    alert("apna college");
}