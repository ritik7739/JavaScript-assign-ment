let url="http://universities.hipolabs.com/search?name=India&state-province="
let btn=document.querySelector("button");
btn.addEventListener('click',async()=>{
    let state=document.querySelector("input").value;
    
    let colArr=await getCollege(state);
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

async function getCollege(state){
    try{
    let res=await axios.get(url+state);
    return res.data;
    }
    catch(err){
        console.log("ERROR-",err);
        return [];
    }
}