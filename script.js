const computerPlay = () => {
    //randomly return either rock, paper or scissors
    //generate number between 0 and 1
    //if num < 0.333, return rock, ...
    const ranNum = Math.random();

    if (ranNum <= 0.33333) {
        return 1
    } else if (ranNum >= 0.33334 && ranNum <= 0.66666) {
        return 2;
    } else if (ranNum >= 0.66667) {
        return 3;
    }
}

console.log(computerPlay());

//get input from user; use it for playerSelection
// let playerSelection = parseInt(prompt("enter your move: "))

const playRound = (playerSelection, computerSelection) => {
    //takes in player and computer selection
    //returns a string that declares a winner

    //if pS beats cS, return "You win!"
}

const game = (playRound) => {
    //calls playRound
    //initiates a 5-round game
    //keeps score
    //outputs a report on who won or lost
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));