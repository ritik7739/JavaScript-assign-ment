function saveToDb(data){
     return new Promise((resolve,reject)=>{
        let internetSpeed=Math.floor(Math.random()*10)+1;
        if(internetSpeed>4){
         resolve("sucess : data was saved");
        }else{
            reject("reject : data rejected")
        }
    });
}


let request=saveToDb("apna college");   //request  = promise object
request.then(()=>{
    console.log("promise was resolved");
    console.log(request);      //print promise object     
})
.catch(()=>{
    console.log("promise was rejected");
    console.log(request);
});



//more easier way
// saveToDb("apna college")
// .then(()=>{
//     console.log("promise was resolved");
// })
// .catch(()=>{
//     console.log("promise was rejected")
// })