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

// Test the function
console.log(getHumanChoice());

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
