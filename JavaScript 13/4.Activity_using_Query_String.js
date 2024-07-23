let url="http://universities.hipolabs.com/search?name="
let btn=document.querySelector("button");
btn.addEventListener('click',async()=>{
    let country=document.querySelector("input").value;
    
    let colArr=await getCollege(country);
    show(colArr);
});

function show(colArr){
    let list=document.querySelector("#list");
    for(col of colArr){
        console.log(col.name);

        let listItem=document.createElement("li");
        listItem.innerText=col.name;
        list.appendChild(listItem);
    }
}

async function getCollege(country){
    try{
    let res=await axios.get(url+country);
    return res.data;
    }
    catch(err){
        console.log("ERROR-",err);
        return [];
    }
}