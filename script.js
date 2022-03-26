const computerPlay = () => {
    //randomly return either rock, paper or scissors
    //if num < 0.333, return rock, ...
    const ranNum = Math.random();

    if (ranNum <= 0.33333) {
        return "rock";
    } else if (ranNum >= 0.33334 && ranNum <= 0.66666) {
        return "paper";
    } else if (ranNum >= 0.66667) {
        return "scissors";
    }
}

console.log(computerPlay());

//get input from user; use it for playerSelection
//create function that takes user input and converts it to num 1-3
const userPlay = () => {
    let playerInput = prompt("enter your move: ");
    
    if (playerInput == "rock") {
        return "rock";
    } else if (playerInput == "paper") {
        return "paper";
    } else if (playerInput == "scissors") {
        return "scissors";
    } else {
        return null;
    }
}

// console.log(userPlay());

const computerSelection = computerPlay();
const playerSelection = userPlay();

const playRound = (playerSelection, computerSelection) => {
    //takes in player and computer selection
    //returns a string that declares a winner

    //if pS beats cS, return "You win!"
    if (playerSelection === computerSelection) {
        return `draw! you played ${playerSelection} and the computer played ${computerSelection}. enter another number`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return `computer wins this round. it played ${computerSelection}, which beats ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return `you win this round. you played ${playerSelection}, which beats ${computerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return `you win this round. you played ${playerSelection}, which beats ${computerSelection}`;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return `computer wins this round. it played ${computerSelection}, which beats ${playerSelection}`;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return `you win this round. you played ${playerSelection}, which beats ${computerSelection}`;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return `computer wins this round. it played ${computerSelection}, which beats ${playerSelection}`;
    }
}

const game = (playRound) => {
    //calls playRound
    //initiates a 5-round game
    //keeps score
    //outputs a report on who won or lost
}

console.log(playRound(playerSelection, computerSelection));