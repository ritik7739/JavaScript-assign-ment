
function outer(){
    let x=5;                     //lexical scope
    let y=10;                    //lexical scope
    function inner(){
        let a=6;                 //function scope
        console.log(x);
        console.log(y);
    }
    // console.log(a);           //a is not accessible outside function scope
    inner();
}

outer();