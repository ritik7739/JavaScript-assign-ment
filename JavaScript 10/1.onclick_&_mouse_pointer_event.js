let btns=document.querySelectorAll("button");

for(btn of btns){
    console.dir(btn);
    btn.onclick=sayHello;
    btn.onmouseenter=function(){
        console.log("mouse enter on button");
    }
}

function sayHello(){
    alert("Hello!!");
}