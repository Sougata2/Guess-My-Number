"use strict";

// secretNumber
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Score
let score = 20;

// highscore
let highscore = 0;

// start event with click
document.querySelector(".check").addEventListener("click", checkGuess);


document.addEventListener('keydown', 
  function(event){
    if (event.key === 'Enter'){
      checkGuess()
    }
  }
)

document.addEventListener('keydown',
  function(event){
    if (event.key === 'Escape') reset()
  }
)


// Reset Function
const reset = function () {
  // Score Reset
  score = 20;
  document.querySelector(".score").textContent = score;

  // Reset the guess input field
  document.querySelector(".guess").value = "";

  // Background Reset
  document.querySelector("body").style.backgroundColor = "#222";

  // SecretNumber Reset
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".number").style.width = "15rem";

  // Message Reset
  document.querySelector(".message").textContent = "Start guessing...";
};



// Reset Click
document.querySelector(".again").addEventListener("click", reset)

// display message
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

// Check the guess.
function checkGuess() {
  const guess = Number(document.querySelector(".guess").value);

  // Empty
  if (!guess) {
    displayMessage("⛔No Number");
  }
  // Equal
  else if (guess === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;

    //setting highScore
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  }
  // not equal
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈Too high!" : "📉 Too low!");
      score -= 1;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("💥 You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }
}
