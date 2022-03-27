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

//runs playRound five times; keeps track of score and reports results
const game = () => {
    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        playRound();
        console.log(playRound(playerSelection, computerSelection));
        
        if (playRound(playerSelection, computerSelection).includes("computer wins")) {
            computerScore++;
        } else if (playRound(playerSelection, computerSelection).includes("you win")) {
            playerScore++;
        } else if (playRound(playerSelection, computerSelection).includes("draw")) {
            playerScore = playerScore;
        }
    }

    if (computerScore > playerScore) {
        return `the computer won with ${computerScore} points to your ${playerScore} points`
    } else if (playerScore > computerScore) {
        return `you won with ${playerScore} points to the computer's ${computerScore} points`
    } else if (playerScore === computerScore) {
        return `tie after five rounds; you each got ${playerScore} points`
    }
}

console.log(game(playRound));