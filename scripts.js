console.log('Welcome to Rock Paper Scissors!');

// logic
function getUserChoice() {
    let userInput;
    while (true) {
      userInput = prompt('Enter Rock, Paper, or Scissors:').toLowerCase();
      if (['rock', 'paper', 'scissors'].includes(userInput)) {
        break;
      } else {
        console.log('Invalid input. Please try again.');
      }
    }
    return userInput;
  }
  
  function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }
  
  function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
      return 'It\'s a tie!';
    }
  
    if (
      (userChoice === 'rock' && computerChoice === 'scissors') ||
      (userChoice === 'paper' && computerChoice === 'rock') ||
      (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
      return 'You win!';
    } else {
      return 'Computer wins!';
    }
}

let userScore = 0;
let computerScore = 0;

function askToContinue() {
  let userInput;
  while (true) {
    userInput = prompt('Do you want to play again? Enter Yes or No:').toLowerCase();
    if (['yes', 'no'].includes(userInput)) {
      break;
    } else {
      console.log('Invalid input. Please try again.');
    }
  }
  return userInput === 'yes';
}
  function playGame() {
    while (true) {
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();
        console.log('You threw: ' + userChoice);
        console.log('The computer threw: ' + computerChoice);
        const result = determineWinner(userChoice, computerChoice);
        console.log(result);
    
        if (result === 'You win!') {
          userScore++;
        } else if (result === 'Computer wins!') {
          computerScore++;
        }
    
        console.log(`Current Score: You (${userScore}) - Computer (${computerScore})`);
    
        if (!askToContinue()) {
          console.log('Thanks for playing! Final Score: You (' + userScore + ') - Computer (' + computerScore + ')');
          break;
        }
      }
    }
  
  playGame();

  