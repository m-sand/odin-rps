//Gets the computer's choice for the round
function getComputerChoice() {
    const arrayPossibleOutcomes = ["rock", "paper", "scissors"];
    return arrayPossibleOutcomes[Math.floor(Math.random() * arrayPossibleOutcomes.length)];
    
}

//Plays a single round
function playRound (playerSelection, computerSelection) {
    let result;

    if (playerSelection.toLowerCase() === computerSelection ) {
        result = "You Tie - " + playerSelection.toLowerCase() + " and " + computerSelection; 
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "paper" ) {
        result = "You Lose - " + computerSelection + " beats " + playerSelection.toLowerCase(); 
    } else if (playerSelection.toLowerCase() === "rock" && computerSelection === "scissors") {
        result = "You Win - " + playerSelection.toLowerCase() + " beats " + computerSelection; 
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "scissors") {
        result = "You Lose - " + computerSelection + " beats " + playerSelection.toLowerCase(); 
    } else if (playerSelection.toLowerCase() === "paper" && computerSelection === "rock") {
        result = "You Win - " + playerSelection.toLowerCase() + " beats " + computerSelection; 
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "rock") {
        result = "You Lose - " + computerSelection + " beats " + playerSelection.toLowerCase(); 
    } else if (playerSelection.toLowerCase() === "scissors" && computerSelection === "paper") {
        result = "You Win - " + playerSelection.toLowerCase() + " beats " + computerSelection;  
    }

    return result;
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
