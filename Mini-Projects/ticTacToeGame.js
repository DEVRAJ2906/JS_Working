let buttons = document.querySelectorAll(".btns");
let reset = document.querySelector("#resetbtn");
let msg = document.querySelector(".win-msg");
let winnermsg = document.querySelector(".win");
let playagain = document.querySelector(".playagain");
let turnsmsg = document.querySelector(".turnsO");
let changeGame = document.querySelector("#change");

changeGame.addEventListener("click", () => {
    location.href = "index.html";
});

let turnO = true;
let count = 0;
let isWin = "no";

let player1 = prompt("Enter Player1's name :");
let player2 = prompt("Enter player2's name :");

turnsmsg.classList.remove("hide");
turnsmsg.innerText = `${player1} turns`;

const checkDraw = () => {
    msg.innerText = "Match is draw.";
        disabledbtns();
        winnermsg.classList.remove("hide");
}
const winPatterns = [[0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,5,8], [2,4,6], [3,4,5], [6,7,8]];

playagain.addEventListener("click", () => {
    turnsmsg.style.color = "red";
    turnsmsg.innerText = `${player1} turns`;
    isWin = "no";
    count = 0;
    turnO = "true";
    enabledbtns();
    winnermsg.classList.add("hide");
});

reset.addEventListener("click", () => {
    player1 = prompt("Enter Player1's name :");
    player2 = prompt("Enter player2's name :");
    turnsmsg.style.color = "red";
    turnsmsg.innerText = `${player1} turns`;
    isWin = "no";
    count = 0;
    turnO = "true";
    enabledbtns();
    winnermsg.classList.add("hide");
});

buttons.forEach((button) => {
    button.addEventListener("click", ()=>{
            count++;
            if(turnO){
                turnsmsg.style.color = "blue";
                turnsmsg.innerText = `${player2} turns`;
                button.innerText = "O";
                button.style.color = "red";
                turnO = false;
            }
            else{
                turnsmsg.style.color = "red";
                turnsmsg.innerText = `${player1} turns`;
                button.innerText = "X";
                button.style.color = "blue";
                turnO = true;
            }
            button.disabled = "true";
            checkWinner();
            if(count === 9 && isWin == "no"){
                checkDraw();
            }
        });
});

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = buttons[pattern[0]].innerText;
        let pos2 = buttons[pattern[1]].innerText;
        let pos3 = buttons[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 === pos2 && pos2 === pos3){
                isWin="yes";
                showWinner(pos1);
            }
        }
    }
}


const disabledbtns = () => {
    for(let button of buttons){
        button.disabled = true;
    }
}

const enabledbtns = () => {
    for(let button of buttons){
        button.disabled = false;
        button.innerText = "";
    }
}

const showWinner = (winner) => {
    if(winner == "O"){
        msg.innerText = `Congratulations, Winner is ${player1}.`;
    }else{
        msg.innerText = `Congratulations, Winner is ${player2}.`;
    }
    disabledbtns();
    winnermsg.classList.remove("hide");
}