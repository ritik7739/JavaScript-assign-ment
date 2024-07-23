function saveToBb(data,succes,failure){
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>4){
        succes();
    }else{
        failure();
    } 
}


saveToBb("apna college",()=>{
    console.log("success: your data was saved");
    saveToBb("hello world",()=>{
        console.log("success2:data2 saved");
        saveToBb("ritik",()=>{
            console.log("success3:data3 saved");
        },()=>{
            console.log("failure3: weak connection");
        });
    },()=>{
        console.log("failure2: weak connection");
    });
},()=>{
    console.log("Failure: weak connection.data was not saved");
});