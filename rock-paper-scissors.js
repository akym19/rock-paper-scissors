const hands = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice(){
    let choice = hands[Math.floor(Math.random()*hands.length)]
    return choice;
}

function capitalize(text){
    let first = text.charAt(0);
    let other = (text.slice(1, text.length)).toLowerCase();
    return first.toUpperCase() + other;
}

let computerSelection;
let hand;
let playerSelection;
let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    hand = prompt("Hand? ");
    playerSelection = capitalize(hand);
    computerSelection = getComputerChoice();

    function win(){
        let player = playerSelection
        let computer = computerSelection
        let message = `You win! ${player} beats ${computer}`;
        // return message;
        console.log(message)
    }
    
    function lose(){
        let player = playerSelection
        let computer = computerSelection
        let message = `You lose! ${computer} beats ${player}`;
        // return message;
        console.log(message)
    }

    if (playerSelection === computerSelection){
        console.log("It's a tie!");
    } else if (
        (playerSelection === 'Paper' && computerSelection === 'Rock')||
        (playerSelection === 'Rock' && computerSelection === 'Scissors')||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')){
            playerScore++
            return win();
    } else if (
        (computerSelection === 'Paper' && playerSelection === 'Rock')||
        (computerSelection === 'Rock' && playerSelection === 'Scissors')||
        (computerSelection === 'Scissors' && playerSelection === 'Paper')){
            computerScore++
            return lose();
    }
}

function game(){
    for (let round = 0; round < 5; round++){
        playRound(playerSelection, computerSelection);
    }
    if (playerScore > computerScore){
        console.log("You win! You are hero!")
    } else if (playerScore < computerScore) {
        console.log("You lose! Booooo!")
    } else {
        console.log("It's a draw!")
    }
    console.log(`Final score: Player: ${playerScore} Computer ${computerScore}`)
    playerScore = 0, computerScore = 0;
}