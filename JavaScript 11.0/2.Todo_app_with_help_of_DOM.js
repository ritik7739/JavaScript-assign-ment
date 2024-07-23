
let inp=document.querySelector("input");
let ul=document.querySelector("ul");
let btns=document.querySelector("button");

btns.addEventListener("click",function(){
    let item=document.createElement("li");
    item.innerText=inp.value;

    let delBtn=document.createElement("button");
    delBtn.innerText="delete";
    delBtn.classList.add(".delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";
});
//concept of  Delegation
ul.addEventListener("click",function(event){
     if(event.target.nodeName=="BUTTON"){
        let listItem=event.target.parentElement;
        listItem.remove();
     }
});