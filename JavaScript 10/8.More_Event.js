let inp=document.querySelector("#user");
let p=document.querySelector("p");

//while changes occurs in input
// inp.addEventListener("change",function(event){
//     console.log(inp.value);
//     p.innerHTML=inp.value;
// });

inp.addEventListener("input",function(event){
    console.log(inp.value);
    p.innerHTML=inp.value;
});