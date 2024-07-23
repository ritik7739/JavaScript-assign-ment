let student={
     name:"ritik",
     marks:97,
     getInfo:function(){
        console.log(this)
        console.log(this.name);
     },
     getMarks:()=>{
        console.log(this);
        console.log(this.marks);
     }
}
console.log(student);
console.log(student.marks);
console.log(student.getInfo());
console.log(student.getMarks());