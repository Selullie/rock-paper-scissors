const choices = ["rock", "paper", "scissors"];
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");
const winloseDiv = document.querySelector("#winlose");
const scoreDiv = document.querySelector("#score");
const playerScoreDiv = document.querySelector("#playerScore");
const computerScoreDiv = document.querySelector("#computerScore");
const winReadoutDiv = document.querySelector("#winReadout");
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
        computerScore++;
      } else {
        winner = 1;
        winloseDiv.textContent = "You win!";
        playerScore++;
      }
      break;
    case "paper":
      if (computerChoice === "paper") {
        winner = 0;
        winloseDiv.textContent = "Draw!";
      } else if (computerChoice === "scissors") {
        winner = 2;
        winloseDiv.textContent = "You lose!";
        computerScore++;
      } else {
        winner = 1;
        winloseDiv.textContent = "You win!";
        playerScore++;
      }
      break;
    case "scissors":
      if (computerChoice === "scissors") {
        winner = 0;
        winloseDiv.textContent = "Draw!";
      } else if (computerChoice === "rock") {
        winner = 2;
        winloseDiv.textContent = "You lose!";
        computerScore++;
      } else {
        winner = 1;
        winloseDiv.textContent = "You win!";
        playerScore++;
      }
      break;
  }
  return winner;
}

rockBtn.addEventListener("click", function (e) {
  let computerSelection = getComputerChoice();
  winReadoutDiv.textContent = "";
  playRound("rock", computerSelection);
  if (winner === 1) {
    playerScoreDiv.textContent = "Player Score: " + playerScore;
  } else if (winner === 2) {
    computerScoreDiv.textContent = "Computer Score: " + computerScore;
  }
  if (playerScore === 5) {
    winReadoutDiv.textContent = "You're the winner!";
    playerScoreDiv.textContent = "Player Score: 0";
    computerScoreDiv.textContent = "Computer Score: 0";
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    winReadoutDiv.textContent = "You lose this time!";
    playerScoreDiv.textContent = "Player Score: 0";
    computerScoreDiv.textContent = "Computer Score: 0";
    playerScore = 0;
    computerScore = 0;
  }
});

paperBtn.addEventListener("click", function (e) {
  let computerSelection = getComputerChoice();
  winReadoutDiv.textContent = "";
  playRound("paper", computerSelection);
  if (winner === 1) {
    playerScoreDiv.textContent = "Player Score: " + playerScore;
  } else if (winner === 2) {
    computerScoreDiv.textContent = "Computer Score: " + computerScore;
  }
  if (playerScore === 5) {
    winReadoutDiv.textContent = "You're the winner!";
    playerScoreDiv.textContent = "Player Score: 0";
    computerScoreDiv.textContent = "Computer Score: 0";
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    winReadoutDiv.textContent = "You lose this time!";
    playerScoreDiv.textContent = "Player Score: 0";
    computerScoreDiv.textContent = "Computer Score: 0";
    playerScore = 0;
    computerScore = 0;
  }
});

scissorsBtn.addEventListener("click", function (e) {
  let computerSelection = getComputerChoice();
  winReadoutDiv.textContent = "";
  playRound("scissors", computerSelection);
  if (winner === 1) {
    playerScoreDiv.textContent = "Player Score: " + playerScore;
  } else if (winner === 2) {
    computerScoreDiv.textContent = "Computer Score: " + computerScore;
  }
  if (playerScore === 5) {
    winReadoutDiv.textContent = "You're the winner!";
    playerScoreDiv.textContent = "Player Score: 0";
    computerScoreDiv.textContent = "Computer Score: 0";
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    winReadoutDiv.textContent = "You lose this time!";
    playerScoreDiv.textContent = "Player Score: 0";
    computerScoreDiv.textContent = "Computer Score: 0";
    playerScore = 0;
    computerScore = 0;
  }
});
