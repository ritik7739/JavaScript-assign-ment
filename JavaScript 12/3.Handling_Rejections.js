let h1=document.querySelector("h1");
function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let num=Math.floor(Math.random()*10)+1;
            if(num>3){
                reject("Promise rejected");
            }
            h1.style.color=color;
            console.log(`color is set ${color}`);
            resolve();
        },delay);
    });
}

async function getcolor(){
    try{
        await changeColor("red",1000);
        await changeColor("orange",1000);
        await changeColor("green",1000);
        await changeColor("blue",1000);
    }catch(error){
        console.log("error catched!");
        console.log(error);
    }

    let a=10;
    console.log(a);
    let b=20;
    console.log(b);
    console.log("new number is ",a+b);
}

getcolor();