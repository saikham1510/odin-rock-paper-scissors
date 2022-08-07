// initialize scores
let playerScore = 0;
let computerScore = 0;

// create buttons and add EventListner
const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', playRound);
})

// randomize computer choice
function computerChoice() {
  const num = Math.floor(Math.random() * 3);

  if (num === 0) {
    return 'Rock';
  } else if (num === 1) {
    return 'Paper'; 
  } else {
    return 'Scissors';
  }
}

// play 
function playRound(playerSelection, computerSelection) {
  playerSelection = this.textContent; // this -> button clicked
  computerSelection = computerChoice();
  console.log(playerSelection);
  console.log(computerSelection);

  // select the div to display results
  let text = document.querySelector('.text');
  let score = document.querySelector('.score');

  if ( // player wins
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Paper") &&
    ((playerScore <= 5 || computerScore <= 5))
  ) {
    playerScore++;
    text.textContent = `You won the round! ${playerSelection} beats ${computerSelection}.`;
    score.textContent = `User: ${playerScore} || Computer: ${computerScore}`;

    // cap the game at 5 points
    if (playerScore >= 5) {
      text.textContent = `Well Played! You won the game!`;
      score.textContent = `User: ${playerScore} || Computer: ${computerScore}`;

      // remove EventListener if player reaches match point
      buttons.forEach((button) => {
        button.removeEventListener('click', playRound);
      })
    }
  } else if ( // computer wins
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Paper" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Rock") &&
    ((computerScore <= 5 || playerScore <= 5))
  ) {
    computerScore++;
    text.textContent = `Computer won the round! ${computerSelection} beats ${playerSelection}.`;
    score.textContent = `User: ${playerScore} || Computer: ${computerScore}`;

    // cap the game at 5 points
    if (computerScore >= 5) {
      text.textContent = `Game Over! You lost the game!`;
      score.textContent = `User: ${playerScore} || Computer: ${computerScore}`;

      // remove EventListener if computer reaches match point
      buttons.forEach((button) => {
        button.removeEventListener('click', playRound);
      })

    }
  } else { // if player and computer make the same choice
    text.textContent = `It's a tie.`;
    score.textContent = `User: ${playerScore} || Computer: ${computerScore}`;
  }
} 



