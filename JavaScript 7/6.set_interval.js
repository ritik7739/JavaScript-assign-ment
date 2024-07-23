console.log("Hi!!!");
let id=setInterval(()=>{
       console.log("Apna College");
},2000);

function Hello(){
       console.log("Hello World");
}
//passing function and timeout
let id2=setInterval(Hello,2000);
console.log(id);

//to stop the id2 settimeout function stop
clearInterval(id2);