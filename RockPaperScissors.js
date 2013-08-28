// JavaScript Rock/Paper/Scissors exercise
// Coded by: Joe Hinkle - August 28th, 2013
// twitter.com/joe_hinkle
// github.com/joehinkle


// Initializing Variables
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();

// Validation for user input
if(userChoice != "rock" | "paper" | "scissors"){
	prompt("You did not select rock, paper, or scissors. Please try again.")
}

// Randomly selecting correct value for computerChoice
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}

// Function that compares the two values
function compare(choice1, choice2){
	
	if(choice1 == choice2){
		return("The result is a tie!");
	}
	
	if(choice1 == "rock"){
		if(choice2 == "scissors"){
			return("Rock wins!");
		}
		else{
			return("Paper wins!");
		}
	}
	
	if (choice1 == "paper"){
		if(choice2 == "rock"){
			return("Paper wins!");
		}
		else{
			return("Scissors win!");
		}
	}
	
	if (choice1 == "scissors") {
		if (choice2 == "paper") {
			return ("Scissors win!");
		}
		else {
			return("Rock wins!");
		}
	}
}

compare(userChoice, computerChoice);