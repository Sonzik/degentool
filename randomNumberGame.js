// randomNumberGame.js

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function startGame() {
  const secretNumber = getRandomNumber(1, 10);
  let attempts = 3;

  while (attempts > 0) {
    const userInput = parseInt(prompt(`Guess the secret number (between 1 and 10). You have ${attempts} attempts left.`));

    if (isNaN(userInput) || userInput < 1 || userInput > 10) {
      alert("Please enter a valid number between 1 and 10.");
      continue;
    }

    if (userInput === secretNumber) {
      alert(`Congratulations! You guessed the correct number ${secretNumber}!`);
      return;
    } else if (userInput < secretNumber) {
      alert("Too low! Try again.");
    } else {
      alert("Too high! Try again.");
    }

    attempts--;
  }

  alert(`Sorry, you've used all your attempts. The secret number was ${secretNumber}.`);
}

startGame();
