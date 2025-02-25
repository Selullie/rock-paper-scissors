function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound (playerSelection, computerSelection) {
    const userChoice = playerSelection.toLowerCase();
    const computerChoice = computerSelection.toLowerCase();
    let winner = 1;

    switch(userChoice) {
        case "rock":
            if (computerChoice === "rock") {
                winner = 0;
            } else if (computerChoice === "paper") {
                winner = 2;
            } else {
                winner = 1;
            }
            break;
        case "paper":
            if (computerChoice === "paper") {
                winner = 0;
            } else if (computerChoice === "scissors") {
                winner = 2;
            } else {
                winner = 1;
            }
            break;
        case "scissors":
            if (computerChoice === "scissors") {
                winner = 0;
            } else if (computerChoice === "rock") {
                winner = 2;
            } else {
                winner = 1;
            }
            break;
    }
    console.log(winner);
    return winner;
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", function (e) {
  let computerSelection = getComputerChoice();
  playRound("rock", computerSelection);
});

paperBtn.addEventListener("click", function (e) {
  let computerSelection = getComputerChoice();
  playRound("paper", computerSelection);
});

scissorsBtn.addEventListener("click", function (e) {
  let computerSelection = getComputerChoice();
  playRound("scissors", computerSelection);
});

const choices = ["rock", "paper", "scissors"]