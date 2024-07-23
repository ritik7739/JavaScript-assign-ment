let h1=document.querySelector("h1");

function changeColor(colors,delay,nextColorChange){
    setTimeout(()=>{
      h1.style.color=colors;
    if(nextColorChange){
        nextColorChange();
    }
},delay);
}

//callback nesting
changeColor("red",1000,()=>{
    changeColor("orange",1000,()=>{
        changeColor("green",1000,()=>{
            changeColor("blue",1000);
        });
    });
});