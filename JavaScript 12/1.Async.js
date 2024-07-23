async function greet(){
    throw "404 page not found";
    return "hello world!";  //return a promise
}

greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("result was : ",result);
})
.catch((err)=>{
    console.log("promise was rejected with error :",err);
})