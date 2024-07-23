let names=["tony","bruce","peter","steve","abc","xyz"];

// let winner=names[0];
// let runnerUp=names[1];
// let secondRunnerUp=names[2];

let [winner,runnerUp,...others]=names;
console.log(winner);
console.log(runnerUp);
console.log(others);