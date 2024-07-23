let fruits=["apple","mango","banana","litchi","orange"];
//print all the fruits name along with index
console.log("Element in forward direction");
for(let i=0;i<fruits.length;i++){
    console.log(i,fruits[i]);
}
//print all the fruit name present at odd indexes
console.log("Element at odd indexes");
for(let i=1;i<fruits.length;i=i+2){
    console.log(i,fruits[i]);
}

//print all the fruit name present at even indexes
console.log("Element at even indexes");
for(let i=0;i<fruits.length;i=i+2){
    console.log(i,fruits[i]);
}

//print all the fruits name along with index in reverse order
console.log("Element in backward direction");
for(let i=fruits.length-1;i>=0;i--){
    console.log(i,fruits[i]);
}
