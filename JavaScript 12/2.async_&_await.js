//Example 1

// function getNum(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             let num=Math.floor(Math.random()*10)+1;
//         console.log(num);
//         resolve();
//         },1000);
//     });
// }

// async function demo(){
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
//     await getNum();
// }

// demo();

//EXAMPLE 2
let h1=document.querySelector("h1");
function colorChange(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolve("color changed");
        },delay);
    });
}

async function getColor(){
    await colorChange("red",1000);
    await colorChange("orange",1000);
    await colorChange("green",1000);
    await colorChange("blue",1000)
};

getColor();