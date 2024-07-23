function saveToDB(data){
    return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random*10)+1;
        if(internetSpeed>4){
            resolve("success : data added");
        }else{
            reject("reject : data rejected");
        }
    });
}

saveToDB("apnacollege")
.then((result)=>{
    console.log("data1 is added");
    console.log("result of promise : ",result);
    return saveToDB("Hello world");
}).then(()=>{
    console.log("data2 is added");
    console.log("result of promise : ",result);
    return saveToDB("ritik singh");
}).then(()=>{
    console.log("data3 is added");
}).catch((error)=>{
    console.log("data is rejected");
    console.log("error of promise : ",error);
});