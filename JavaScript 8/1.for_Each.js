let arr=[1,2,3,4,5];
console.log("using arrow function");
arr.forEach((ele)=>{
    console.log(ele);
});

console.log("using normal function");
arr.forEach(function(ele){
     console.log(ele);
});



let student=[{
    name:"ritik",
    marks:95,
    },
    {
    name:"shardha",
    marks:94.4,
    },
    {
    name:"rajat",
    marks:93
    }
];

student.forEach((ele)=>{
    console.log(ele.marks);
});