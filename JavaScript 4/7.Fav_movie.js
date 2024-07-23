const fav_movie="avatar";

let guess=prompt("Guess my favourite movie");

while((guess!=fav_movie) && (guess!="quit")){
    guess=prompt("Wrong guess. Please try again");
}

if(guess==fav_movie){
    alert("Congratulations Your guess is Correct");
}else{
    alert("You quite the game");
}