let h1=document.querySelector("h1");
function changeColor(color,delay){
    //not added reject because changes is gurranted change
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed");
        },delay);
    });
}

changeColor("red",1000)
.then(()=>{
    console.log("red color was changed");
    return changeColor("orange",1000);
})
.then(()=>{
    console.log("orange color was changed");
    return changeColor("green",1000);
})
.then(()=>{
    console.log("green color was changed");
    return changeColor("blue",1000);
})
.then(()=>{
    console.log("blue color was changed");
});