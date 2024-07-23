function hello(){
    console.log("inside hello function")
    console.log("hello");
}
function Demo(){
    console.log("calling hello function");
    hello();
}

console.log("Calling Demo Function");
Demo();
console.log("done bye!")