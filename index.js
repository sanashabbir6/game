var randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
    const userGuess = document.getElementById('guess').value;
    const resultText = document.getElementById('result');
    
    if (userGuess < 1 || userGuess > 100) {
        resultText.textContent = "Please enter a number between 1 and 100!";
    } else if (userGuess < randomNumber) {
        resultText.textContent = "Too low, try again!";
    } else if (userGuess > randomNumber) {
        resultText.textContent = "Too high, try again!";
    } else {
        resultText.textContent = "Congratulations! You guessed the correct number!";
    }
}