// Scores
let playerScore = 0;
let computerScore = 0;

// Function for Computer Choice
function computerChoice() {
  const num = Math.floor(Math.random() * 3);

  if (num === 0) {
    return 'rock';
  } else if (num === 1) {
    return 'paper'; 
  } else {
    return 'scissors';
  }
}

// Function for a single round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === 'rock' && computerSelection === 'paper') {
    computerScore++;
    return `You lose! Paper beats Rock. User:${playerScore}  Computer:${computerScore}`;
  } 

  else if (playerSelection === 'rock' && computerSelection === 'scissors') {
    playerScore++;
    return `You win! Rock beats Scissors. User:${playerScore}  Computer:${computerScore}`;
  } 

  else if (playerSelection === 'paper' && computerSelection === 'rock') {
    playerScore++;
    return `You win! Paper beats Rock. User:${playerScore}  Computer:${computerScore}`;
  } 

  else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    computerScore++;
    return `You lose! Scissors beat Paper. User:${playerScore}  Computer:${computerScore}`;
  } 

  else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    computerScore++;
    return `You lose! Rock beats Scissors. User:${playerScore}  Computer:${computerScore}`;
  } 

  else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    playerScore++;
    return `You win! Scissors beats Paper. User:${playerScore}  Computer:${computerScore}`;
  } 

  else {
    return `It's a tie.`;
  }
} 

// 5 round game
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Rock? Paper? Scissors');
    playerSelection = playerSelection.toLowerCase();
    let computerSelection = computerChoice();
    console.log(playRound(playerSelection, computerSelection))
  } 

  if (playerScore > computerScore) {
    console.log(`You win! User:${playerScore}  Computer:${computerScore}`);
  } else if (computerScore > playerScore) {
    console.log(`You lose! User:${playerScore}  Computer:${computerScore}`);
  } else {
    console.log(`Can't beat a computer >_< ? User:${playerScore}  Computer:${computerScore}`)
  }
}

game();