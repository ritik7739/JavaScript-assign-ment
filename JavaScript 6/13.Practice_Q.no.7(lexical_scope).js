let greet="namaste";
function outer(){
    let greet="hello";
    console.log(greet);
    function inner(){
        console.log(greet);
    }
}
console.log(greet);
outer();