//function 1: getComputerChoice  which will randomly return rock,paper, or scissors.
const rock = 1
const paper = 2
const scissors = 3
function getComputerChoice(){
    let computerChoice = Math.floor((Math.random() * 3) + 1);
    if (computerChoice === rock){return "Rock"}else if(computerChoice === paper){return "Paper"}else {return "Scissors"}
}
//function 2: playRound which will have 2 params playerSelection and computerSelection. This should return a string declaring the winner and be case-insensitive
function playRound(playerSelection,computerSelection){
    let player = playerSelection.toLowerCase()
    let computer = getComputerChoice();
    computer = computer.toLowerCase();
    if(player == "rock" && computer == "paper" || player == "paper" && computer == "scissors" || player == "scissors" && computer == "rock"){return "player loses"}
}

//function 3: game() which uses playRound and a prompt() for input.
function game(){
    let choice = prompt("Hello, let's play RPS. Best of 5. Enter your choice here");
    let i = 0;
    while (i < 5){console.log(playRound(choice));i++}

}