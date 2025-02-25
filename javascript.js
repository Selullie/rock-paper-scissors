const choices = ["rock", "paper", "scissors"];
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const winloseDiv = document.querySelector("#winlose");
const scoreDiv = document.querySelector("#score");
const playerScoreDiv = document.querySelector("#playerScore");
const computerScoreDiv = document.querySelector("#computerScore");
let playerScore = 0;
let computerScore = 0;
let winner = 1;

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  const userChoice = playerSelection.toLowerCase();
  const computerChoice = computerSelection.toLowerCase();

  switch (userChoice) {
    case "rock":
      if (computerChoice === "rock") {
        winner = 0;
        winloseDiv.textContent = "Draw!";
      } else if (computerChoice === "paper") {
        winner = 2;
        winloseDiv.textContent = "You lose!";
      } else {
        winner = 1;
        winloseDiv.textContent = "You win!";
      }
      break;
    case "paper":
      if (computerChoice === "paper") {
        winner = 0;
        winloseDiv.textContent = "Draw!";
      } else if (computerChoice === "scissors") {
        winner = 2;
        winloseDiv.textContent = "You lose!";
      } else {
        winner = 1;
        winloseDiv.textContent = "You win!";
      }
      break;
    case "scissors":
      if (computerChoice === "scissors") {
        winner = 0;
        winloseDiv.textContent = "Draw!";
      } else if (computerChoice === "rock") {
        winner = 2;
        winloseDiv.textContent = "You lose!";
      } else {
        winner = 1;
        winloseDiv.textContent = "You win!";
      }
      break;
  }
  return winner;
}

rockBtn.addEventListener("click", function (e) {
  let computerSelection = getComputerChoice();
  playRound("rock", computerSelection);
  if (winner === 1) {
    playerScoreDiv.textContent = "Player Score: " + playerScore;
  } else if (winner === 2) {
    computerScoreDiv.textContent = "Computer Score: " + computerScore;
  }
});

paperBtn.addEventListener("click", function (e) {
  let computerSelection = getComputerChoice();
  playRound("paper", computerSelection);
});

scissorsBtn.addEventListener("click", function (e) {
  let computerSelection = getComputerChoice();
  playRound("scissors", computerSelection);
});
