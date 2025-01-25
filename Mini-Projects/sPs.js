let stone = document.querySelector("#stone");
let paper = document.querySelector("#paper");
let scissor = document.querySelector("#scissors");
let winMsg = document.querySelector("#msg");
let userScore = document.querySelector("#userScore");
let compScore = document.querySelector("#compScore");
let changeGame = document.querySelector("#change");

changeGame.addEventListener("click", () => {
    location.href = "index.html";
});

let userWins = 0;
let compWins = 0;

let weapons = [stone, paper, scissor];

let showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userWins++;
        userScore.innerText = userWins;
        winMsg.style.backgroundColor = "blue";
        winMsg.innerText = `You wins because your ${userChoice} beats ${compChoice}.`;
    }else{
        compWins++;
        compScore.innerText = compWins;
        winMsg.style.backgroundColor = "red";
        winMsg.innerText = `You loses because ${compChoice} beats your ${userChoice}.`;
    }
}

let compWeapon = () => {
    let rndIdx = Math.floor(Math.random() * 3);
    return weapons[rndIdx].getAttribute("id");
}

let checkWinner = (userChoice) => {
    let compChoice = compWeapon();
    if(userChoice === compChoice){
        winMsg.style.backgroundColor = "green";
        winMsg.innerText = `Match is draw because both of you have selected ${compChoice}`;
    }else{
        let userWin = true;
        if(userChoice === "stone"){
            userWin = compChoice === "paper"?false:true;
        }else if(userChoice === "paper"){
            userWin = compChoice === "scissors"?false:true;
        }else{
            userWin = compChoice === "stone"?false:true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

weapons.forEach((weapon) => {
    weapon.addEventListener("click", () => {
        let userChoice = weapon.getAttribute("id");
        checkWinner(userChoice);
    });
});