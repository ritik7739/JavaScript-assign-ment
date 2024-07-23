// Example 1

// let url="https://catfact.ninja/fact";

// async function getFact(){
//     try{
//         let res=await axios.get(url);
//         console.log(res.data.fact);
//     }catch(err){
//         console.log("ERROR",err);
//     }
// }

// getFact();


let url="https://catfact.ninja/fact";

let btn=document.querySelector("button");
btn.addEventListener('click',async()=>{
    let fact=await getFact();
    console.log(fact);
    let p=document.querySelector('#getFact');
    p.innerText=fact;
});

async function getFact(){
    try{
        let res=await axios.get(url);
        return res.data.fact;
    }catch(err){
        console.log("ERROR",err);
        return "No Fact Available";
    }
}