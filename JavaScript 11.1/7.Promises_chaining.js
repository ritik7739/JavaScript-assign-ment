function saveToDb(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
            resolve("sucess: data is added");
        }else{
            reject("reject: data is rejected");
        }
    });
}


//promises chaining
saveToDb("apna college")
.then(()=>{
    console.log("data1 is  added");
    return saveToDb("Hello world");
}).then(()=>{
    console.log("data2 is added");
    return saveToDb("ritik")
}).then(()=>{
    console.log("data3 is added");
}).catch(()=>{
    console.log("data is rejected");
});