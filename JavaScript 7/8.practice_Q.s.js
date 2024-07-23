//print hello world after 2seconds for 5 times

let id=setInterval(()=>{
    console.log("Hello World!!");
},2000);

//stop after 10sec 

setTimeout(()=>{
    clearInterval(id);
},10000);