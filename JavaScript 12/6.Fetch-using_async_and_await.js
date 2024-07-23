let url="https://catfact.ninja/fact";
async function getData(){
    try{
    let  res=await fetch(url);
    let data=await res.json();
    console.log(data.fact);
    }
    catch(err){
        console.log("ERROR -",err);
    }
}

getData();