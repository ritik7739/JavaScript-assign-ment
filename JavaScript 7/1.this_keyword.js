const student={
    name:"ritik",
    age:23,
    eng:97,
    maths:98,
    phy:99,
    getAvg(){
        console.log(this);                       //this access all the element of the student object
        let avg= (this.eng+this.maths+this.phy)/3; //to access the object element we use this keyword
        console.log(`${this.name} got an average marks of ${avg}`);
    }
}


function getAvg(){
    console.log(this);  // print window object
}

console.log(student);
console.log(student.name);
console.log(student.getAvg());
console.log(getAvg());