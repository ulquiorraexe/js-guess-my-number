'use strict';

const min = 1;
const max = 20;
let score = 20;
let highscore = 0;
const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
againButton.addEventListener("click", () => {
    const min = 1;
    const max = 20;
    let score = 20;
    const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
    document.body.style.backgroundColor = "#222";
    document.querySelector(".score").textContent = score
    document.querySelector("h1").textContent = "Guess My Number!"
});
checkButton.addEventListener("click", haveGuess);

function changeMessage(message) {
    document.querySelector('.message').textContent = message;
}
function haveGuess() {
    const currentGuess = document.querySelector(".guess").value;
    if (currentGuess == randomInt) {
        changeMessage("You won!");
        document.body.style.backgroundColor = "#60b347";
        highscore = document.querySelector(".score").textContent;
        document.querySelector(".highscore").textContent = highscore;
        document.querySelector("h1").textContent = "Correct Number!"
    } else if (currentGuess < randomInt) {
        changeMessage("Too low.");
        document.querySelector(".score").textContent = --score
    } else if (currentGuess > randomInt) {
        changeMessage("Too high.");
        document.querySelector(".score").textContent = --score
    } else if (score == 0) {
        changeMessage("You lost.")
    }
}
