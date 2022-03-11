// Create function that returns either  ‘Rock’, ‘Paper’ or ‘Scissors’

/*  -> function() {
    array with 3 items = [item1, item2, item3]
    randomly generates number between 1-3
     return array with randomly generated index
}
*/
function computerPlay() {
  const gameArray = ["Rock", "Paper", "Scissors"];
  const rng = Math.round(Math.random() * (3 - 1) + 1 - 1);
  const rockPaperScissors = gameArray[rng];
  //   console.log(rng);
  //   console.log(rockPaperScissors);
  return rockPaperScissors;
}
computerPlay();
// Write a function that plays a single round of Rock Paper Scissors.
// Just realized function above isn't plain english enough

/*  -> function parameters with playerSelectedRPS randomGeneratedRPS
    make user selected parameter case-insensitive 
    rock > scissors
    paper > rock
    scissors > paper


    if playerSelectedRPS wins against randomGeneratedRPS 
        print to output "You Lose! Paper beats Rock" (whatever is the selected choices)
    and if playerSelectedRPS loses against randomGeneratedRPS
        print to output "You Win ! Scissors beats Paper"
    
}
*/

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  const rock = "rock";
  const paper = "paper";
  const scissors = "scissors";
  console.log(`Your choice: ${playerSelection}`);
  console.log(`Computer's choice: ${computerSelection}`);
  if (playerSelection === rock && computerSelection === paper) {
    console.log("You lose! Paper beats Rock");
    return "You lose! Paper beats Rock";
  } else if (playerSelection === paper && computerSelection === rock) {
    console.log("You win! Paper beats Rock");
    return "You win! Paper beats Rock";
  } else if (playerSelection === scissors && computerSelection === paper) {
    console.log("You win! Scissors beats Paper");
    return "You win! Scissors beats Paper";
  } else if (playerSelection === paper && computerSelection === scissors) {
    console.log("You lose! Scissors beats Paper");
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === scissors && computerSelection === rock) {
    console.log("You lose! Rock beats Scissors");
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === rock && computerSelection === scissors) {
    console.log("You win! Rock beats Scissors");
    return "You win! Rock beats Scissors";
  } else if (playerSelection === rock && computerSelection === rock) {
    console.log("Tie! Rock negates Rock");
    return "Tie! Rock negates Rock";
  } else if (playerSelection === paper && computerSelection === paper) {
    console.log("Tie! Paper negates Paper");
    return "Tie! Paper negates Paper";
  } else if (playerSelection === scissors && computerSelection === scissors) {
    console.log("Tie! Scissors negates Scissors");
    return "Tie! Scissors negates Scissors";
  }
}
function game(playRound) {
  let round;
  let playerScore;
  let computerScore;
  for (let i = 0; i < 5; i++) {
    round = playRound("scissors", computerPlay());
    if (round.includes("win")) {
      playerScore += 1;
    }
  }
}
playRound("scissors", computerPlay());
// Two parameters the playerSelection and computerSelection
// Then return a string that declares winner make playerSelection parameter case-insensitive
