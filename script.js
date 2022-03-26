//randomly return either rock, paper or scissors
const computerPlay = () => {
    const ranNum = Math.random();
    console.log(ranNum);

    if (ranNum <= 0.33333) {
        return "rock";
    } else if (ranNum >= 0.33334 && ranNum <= 0.66666) {
        return "paper";
    } else if (ranNum >= 0.66667) {
        return "scissors";
    }
}

//get play from user
const userPlay = () => {
    let playerInput = prompt("enter your move: ");
    
    if (playerInput.toLowerCase() == "rock") {
        return "rock";
    } else if (playerInput.toLowerCase() == "paper") {
        return "paper";
    } else if (playerInput.toLowerCase() == "scissors") {
        return "scissors";
    } else {
        return null;
    }
}

//store outputs of play functions in variables
const computerSelection = computerPlay();
const playerSelection = userPlay();

//plays a single round
const playRound = (playerSelection, computerSelection) => {
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
    // if (playRound.includes("computer wins")) {
    //     console.log("shrek");
    // }
}

console.log(playRound(playerSelection, computerSelection));