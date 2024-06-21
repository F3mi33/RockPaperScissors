let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
const randomNumber = Math.floor(Math.random() * 3);
switch(randomNumber){
    case 0:
        return "rock";
    case 1:
        return "paper";
    case 2:
        return "Scissors";
    default:
        return null;
  }
}

function getHumanChoice() {
    const choice = prompt("Please enter your choice: rock, paper, or scissors").toLowerCase();
    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice;
    } else {
        console.log("Invalid choice. Please try again.");
        return getHumanChoice(); // Recursively call the function again for a valid input
    }
}

// Function to play a round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}.`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`);
        computerScore++;
    }
}

// Test the playRound function
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();
playRound(humanChoice, computerChoice);


// Test the function
console.log(getHumanChoice());
