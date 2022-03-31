const rockButton = document.querySelector(".rock-btn");
const paperButton = document.querySelector(".paper-btn");
const scissorsButton = document.querySelector(".scissors-btn");
const clearbutton = document.querySelector(".clear");
const scoreText = document.querySelector(".score-text");
const winner = document.querySelector(".winner")
let results = document.querySelector(".results");
let callCount = 0;
let playerTrackerScore = 0;
let computerTrackerScore = 0;
results.scrollTop = results.scrollHeight;

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
  results.innerText += `Your choice: ${playerSelection}   \n`;
  results.innerText += `Computer's choice: ${computerSelection}   \n`;
  if (playerSelection === rock && computerSelection === paper) {
    results.innerText += "You lose! Paper beats Rock \n";
    results.innerText += "\n";
    return "You lose! Paper beats Rock";
  } else if (playerSelection === paper && computerSelection === rock) {
    results.innerText += "You win! Paper beats Rock \n";
    results.innerText += "\n";
    return "You win! Paper beats Rock";
  } else if (playerSelection === scissors && computerSelection === paper) {
    results.innerText += "You win! Scissors beats Paper \n";
    results.innerText += "\n";
    return "You win! Scissors beats Paper";
  } else if (playerSelection === paper && computerSelection === scissors) {
    results.innerText += "You lose! Scissors beats Paper \n";
    results.innerText += "\n";
    return "You lose! Scissors beats Paper";
  } else if (playerSelection === scissors && computerSelection === rock) {
    results.innerText += "You lose! Rock beats Scissors \n";
    results.innerText += "\n";
    return "You lose! Rock beats Scissors";
  } else if (playerSelection === rock && computerSelection === scissors) {
    results.innerText += "You win! Rock beats Scissors \n";
    results.innerText += "\n";
    return "You win! Rock beats Scissors";
  } else if (playerSelection === rock && computerSelection === rock) {
    results.innerText += "Tie! Rock negates Rock \n";
    results.innerText += "\n";
    return "Tie! Rock negates Rock";
  } else if (playerSelection === paper && computerSelection === paper) {
    results.innerText += "Tie! Paper negates Paper \n";
    results.innerText += "\n";
    return "Tie! Paper negates Paper";
  } else if (playerSelection === scissors && computerSelection === scissors) {
    results.innerText += "Tie! Scissors negates Scissors \n";
    results.innerText += "\n";
    return "Tie! Scissors negates Scissors";
  }
}

function score(round) {
  let playerScore = 0;
  let computerScore = 0;

  const scoreArray = [];
  if (round.includes("win")) {
    playerScore += 1;
  } else if (round.includes("lose!")) {
    computerScore += 1;
  }
  console.log(`Computer: ${computerScore}`);
  console.log(`Player: ${playerScore}`);


  scoreArray.push(playerScore, computerScore);
  console.log(scoreArray);
  // Push scores to an array, return array use that array as an argument list inside next scoreTracker function call with spread operator and optional parameters
  return scoreArray;
}

function scoreTracker(humanS, computerS) {
  winner.innerText = ''
  callCount += 1;
  let scoreTrackerArray = [];
  playerTrackerScore += humanS;
  computerTrackerScore += computerS;
  scoreTrackerArray.push(playerTrackerScore, computerTrackerScore);
  console.log(
    `playerTrackerScore ${playerTrackerScore} computerTrackerScore${computerTrackerScore} callCount ${callCount}`
  );
  // make it so that this if statement below tracks player/computer score (whoever reaches 5 first instead of callcount)
  //  and then do the same thing to if statement at start of function
  if (playerTrackerScore >= 5 || computerTrackerScore >= 5) {
    playerScore = playerTrackerScore;
    computerScore = computerTrackerScore;
    if (computerScore > playerScore) {
      results.innerText += "Computer wins best 3 out of 5 \n\n";
      winner.innerText = "Computer Wins"

    } else if (playerScore > computerScore) {
      results.innerText += "Player wins best 3 out of 5 \n\n";
      winner.innerText = "Player Wins"
      
    }
    callCount = 0;
    playerTrackerScore = 0;
    computerTrackerScore = 0;
  }
  scoreText.innerText = `Score--  Player:  ${playerTrackerScore} Computer:  ${computerTrackerScore}`;

}

rockButton.addEventListener("click", () => {
  const scores = score(playRound("Rock", computerPlay()));
  scoreTracker(...scores);
});
paperButton.addEventListener("click", () => {
  const scores = score(playRound("Paper", computerPlay()));
  scoreTracker(...scores);
});
scissorsButton.addEventListener("click", () => {
  const scores = score(playRound("Scissors", computerPlay()));
  scoreTracker(...scores);
});
clearbutton.addEventListener("click", () => {
  results.innerText = "";
});

// Player: Computer:
// playRound("scissors", computerPlay());

// game(playRound);
// Two parameters the playerSelection and computerSelection
// Then return a string that declares winner make playerSelection parameter case-insensitive

function game(playRound) {
  let round;
  let playerScore = 0;
  let computerScore = 0;

  let playerInput = prompt("Do you want to choose Rock, Paper, or Scissors?");
  if (playerInput === null) {
    playerInput = "";
  }
  playerInput = playerInput.toLowerCase();
  console.log(playerInput);
  console.log(typeof playerInput);

  if (
    playerInput !== "rock" &&
    playerInput !== "scissors" &&
    playerInput !== "paper"
  ) {
    console.log("Invalid Entry. Enter Rock, Paper, or Scissors");
  }
  for (let i = 0; i < 5; i++) {
    round = playRound(playerInput, computerPlay());
    if (round.includes("win")) {
      playerScore += 1;
    } else if (round.includes("lose!")) {
      computerScore += 1;
    }
    console.log(`Computer: ${computerScore}`);
    console.log(`Player: ${playerScore}`);
  }
  if (computerScore > playerScore) {
    console.log("Computer wins best 3 out of 5");
  } else if (playerScore > computerScore) {
    console.log("Player wins best 3 out of 5");
  } else {
    console.log("It is a tie");
  }
}
