let student={
    name:"ritik",
    age:23,
    marks:98.4,
}

console.log(student);

//update the value of marks
console.log("Marks updated");
student.marks="A";
console.log(student);

//add new entry into the student
console.log("Add new city to the object");
student.city="delhi";
console.log(student);

//delete an element for the student object literals
console.log("delete marks from student object");
delete student.marks;
console.log(student);