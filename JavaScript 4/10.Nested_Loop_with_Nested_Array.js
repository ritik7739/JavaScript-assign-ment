let heroes=[["ironman","spiderman","thor"],["superman","super women","flash"]];

for(let i=0;i<heroes.length;i++){
    console.log(i,heroes[i]);
    for(let j=0;j<heroes[i].length;j++){
        console.log(`j=${j},${heroes[i][j]}`);
    }
}

let student=[["aman",79],["ritik",80],["rockey",90]];
for(let i=0;i<student.length;i++){
    console.log(`student data ${i+1}`);
    for(j=0;j<student[i].length;j++){
        console.log(student[i][j]);
    }
}