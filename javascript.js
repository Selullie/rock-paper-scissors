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

function playGame() {
    const rounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = "Rock";
    let computerSelection = getComputerChoice();
    let roundWinner = 1;

    for (let i = 0; i < rounds; i++) {
        computerSelection = getComputerChoice();
        playerSelection = prompt("Rock, paper or scissors?");

        if (roundWinner === 0) {
            console.log("This round is a tie! Computer picked " + computerSelection + ". No one wins.");
        } else if (roundWinner === 2) {
            console.log("You lose this round! Computer picked " + computerSelection + ".");
            computerScore++;
        } else {
            console.log("You win this round! Computer picked " + computerSelection + ".");
            playerScore++;
        }
    }

    if (computerScore === playerScore) {
        console.log("This game was a tie!");
    } else if (computerScore > playerScore) {
        console.log("You lose! The computer won!");
    } else {
        console.log("You win! The computer loses!");
    }
}

const choices = ["rock", "paper", "scissors"]
playGame();