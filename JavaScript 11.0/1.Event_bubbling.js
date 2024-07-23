let div=document.querySelector("div");
let ul=document.querySelector("ul");
let li=document.querySelector("li");

div.addEventListener("click",function(){
    console.log("div was clicked");
});

//To stop the event bubbling we use "event.stopProgration()" method
ul.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("ul was clicked");
});

li.addEventListener("click",function(event){
    event.stopPropagation();
    console.log("li was clicked");
});