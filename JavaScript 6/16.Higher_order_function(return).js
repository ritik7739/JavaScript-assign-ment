
function oddOrEvenFactory(req){
    if(req=="odd"){
        return function odd(n){
            console.log(!(n%2==0));
        }
    }
    else if(req=="even"){
        return function even(n){
            console.log((n%2==0));
        }
    }
    else{
        console.log("Wrong input");
    }
}
let req= "even";
let even=oddOrEvenFactory(req);   //its return a function for even number
console.log(even(10));