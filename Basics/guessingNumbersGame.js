//Create a game where you start with any random number. Ask the user to keep guessing the number until the user enters correct value

let guessNum = 30;

let userNum = prompt("If you guess a correct number than you win the match otherwise you lose.\nGuess a number :");
while(userNum != guessNum){
    if(userNum < guessNum){
        userNum = prompt("You have choosen wrong number.\nPlease try a bigger number.");
    }else{
        userNum = prompt("You have choosen wrong number.\nPlease try a smaller number.");
    }
}

alert("You have choosen right number.\nYOU WIN THE MATCH!!!");