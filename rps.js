function capitalize(text){
    const first = text.charAt(0);
    const other = (text.slice(1, text.length)).toLowerCase();
    return first.toUpperCase() + other;
}

function getComputerChoice(){
    const hands = ['Rock', 'Paper', 'Scissors'];
    return choice = hands[Math.floor(Math.random()*hands.length)];
    // return choice;
}

let playerScore = 0;
let computerScore = 0;

function playRound (playerHand) {
    const playerSelection = capitalize(playerHand);
    const computerSelection = getComputerChoice();
    const result = document.getElementById("result");
    const compScr = document.getElementById("compScr");
    const playerScr = document.getElementById("playerScr");

    document.getElementById("playerSelection").src = `images/${playerSelection.toLowerCase()}.png`;
    document.getElementById("computerSelection").src = `images/${computerSelection.toLocaleLowerCase()}.png`;


    if (playerSelection === computerSelection){
        // console.log("It's a tie!");
        result.textContent = "It's a tie!";
    } else if (
        (playerSelection === 'Paper' && computerSelection === 'Rock')||
        (playerSelection === 'Rock' && computerSelection === 'Scissors')||
        (playerSelection === 'Scissors' && computerSelection === 'Paper')){
            playerScore++;
            result.textContent = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
            computerScore++;
            result.textContent = `You lose! ${computerSelection} beats ${playerSelection}`;
    }
    playerScr.textContent = playerScore;
    compScr.textContent = computerScore;

    if (playerScore === 5) {
        result.textContent = "You win! You are hero!";
        playerScore = 0;
        computerScore = 0;
    } else if (computerScore === 5) {
        result.textContent = "You lose! Booooo!";
        playerScore = 0;
        computerScore = 0;
    }
}

const buttons = document.getElementsByClassName("playerCards")

for (let button of buttons) {
    button.addEventListener("click", function(e) {
        const clickedHand = e.target.id;
        console.log(clickedHand)
        playRound(clickedHand);
    })
}