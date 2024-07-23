const student={
    name:"karan",
    age:14,
    class:9,
    subject:["Hindi","English","Science","Math"],
    username:"karan@123",
    passward:"abcd",
};

let {username:user,passward:secret,city:place="Mumbai"}=student;

console.log(user);
console.log(secret);
console.log(place);