//Lite code for rock, paper and scissors game on console

function computerPlay() {
    const computerValues = ["rock", "paper", "scissors"];
    return computerValues[Math.floor(Math.random() * computerValues.length)];
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) {
        return`Play again... Same results.`
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return`You won! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        return`You won! ${playerSelection} beats ${computerSelection}`
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return`You won! ${playerSelection} beats ${computerSelection}`
    } else {
        return`You lose... Computer ${computerSelection} beats player ${playerSelection}`
    }
}

const playerSelection = "rock"
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
