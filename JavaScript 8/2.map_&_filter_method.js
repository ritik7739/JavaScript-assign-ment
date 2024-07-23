let arr=[1,2,3,4];

let double=arr.map((ele)=>{
    return (2*ele);
});

console.log(double);


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
    marks:92,
    }
];

//map methods
let gpa=student.map((ele)=>{
    return ele.marks/10;
});

console.log(gpa);

//filter methods also returns an array

let nums=[1,2,2,4,5,6,7,8,9,10,11,12];
let ans=nums.filter((ele)=>{
       return (ele % 2==0);//condition for even
});

console.log(ans);