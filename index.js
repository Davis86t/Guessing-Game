const gameGuess = document.querySelector("#gameGuess");
const submitGuess = document.querySelector(".submitGuess");
const gameText = document.querySelector(".gameText");
const resetGame = document.querySelector(".gameReset");
const everything = document.querySelector("body");

let guess = document.querySelectorAll(".guess");

let randomNum = 1 + Math.floor(Math.random() * 100);
let guessCount = 0;

submitGuess.addEventListener('click', function () {
    let currentGuess = gameGuess.value;
    gameGuess.value = "";
    guess[guessCount].innerText = currentGuess;
    guessCount++;

    console.log(currentGuess);
    console.log(randomNum);

    if (guessCount === 5) {
        gameText.textContent = 'Ran out of guesses';
    } else if (currentGuess > randomNum && (currentGuess - randomNum < 20)) {
        gameText.textContent = "You're getting close, try guessing lower";
    } else if (currentGuess > randomNum && (currentGuess - randomNum > 20)) {
        gameText.textContent = "You're getting further away, try guessing lower";
    } else if (currentGuess < randomNum && (randomNum - currentGuess < 20)) {
        gameText.textContent = "You're getting close, try guessing higher";
    } else if (currentGuess < randomNum && (randomNum - currentGuess > 20)) {
        gameText.textContent = "You're getting further away, try guessing higher";
    } else {
        gameText.textContent = 'You have have guessed correctly!';
    }
});
