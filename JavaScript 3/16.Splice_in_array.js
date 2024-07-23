let months=["january","February","march","april","may"];
console.log(months.length);
//splice method
console.log(months.splice(2));   //splice delete element from index 2 till the end of the element
console.log(months.splice(0,1));  //splice delete 1 element at index 0
console.log(months);
console.log(months.splice(0,0,"june","july","august")); //not delete any element only add the element index 0
console.log(months);
