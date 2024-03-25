//Gets the computer's choice for the round
function getComputerChoice() {
    const arrayPossibleOutcomes = ['Rock', 'Paper', 'Scissors'];
    const random = Math.floor(math.random * arrayPossibleOutcomes.length);
    let computerChoice = arrayPossibleOutcomes[random];
    return computerChoice;
}