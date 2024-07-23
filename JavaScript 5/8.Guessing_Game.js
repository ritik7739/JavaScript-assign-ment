const max=prompt("Enter the max number");

const random=Math.floor(Math.random()*max)+1;
let guess=prompt("Guess the random number");
while(true){
    if(guess=="quit"){
        console.log("you're quiting the game");
        break;
    }
    if(guess==random){
        console.log("Your guessing is right!! congrats!!");
        break;
    }else if(guess<random){
        guess=prompt("hints: Your guess was too small. please try again");
    }
    else{
        guess=prompt("hints: Your guess was too big. please try again");
    }
}