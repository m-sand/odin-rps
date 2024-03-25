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

//plays a best of 5 game
function playGame() {
    let playerWinCount = 0;
    let computerWinCount = 0;
    let gameResult;

    //Plays 5 games
    for (let i = 0; i<5; i++){
        let playerChoice = prompt("Please enter a choice: Rock, Paper, or Scissors");
        let roundOutcome = playRound(playerChoice, getComputerChoice());

        if (roundOutcome.includes("Win")) {
            playerWinCount++;
        } else if (roundOutcome.includes("Lose")){
            computerWinCount++;
        }
        console.log(roundOutcome);
    }

    //Compares score and determines winner
    if(playerWinCount > computerWinCount){
        gameResult = "Congrats! You won: " + playerWinCount + " - " + computerWinCount;
    } else if (playerWinCount < computerWinCount) {
        gameResult = "Bummer... You've lost: " + playerWinCount + " - " + computerWinCount;
    } else {
        gameResult = "It's a tie: " + playerWinCount + " - " + computerWinCount;
    }

    return gameResult;
}
