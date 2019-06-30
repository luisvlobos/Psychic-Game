//delcaring variables
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let wins = 0;
let losses = 0;
let guessesLeft = 9;
let guesses = [];

var userGuess = document.onkeyup;
var compGuess = letters[Math.floor(Math.random() * letters.length)];

//assigning span element IDs to variables
const winsElem = document.getElementById('win');
const lossElem = document.getElementById('lose');
const leftElem = document.getElementById('leftOver');
const guessesElem = document.getElementById('soFar');

document.onkeyup = function (event) {
    
  
    userGuess = event.key;
    guesses.push(userGuess);

    //stops you from losing a guess if key other than alphabetical key is pressed
    if(letters.indexOf(userGuess) > -1){
    
    if (compGuess == userGuess) {
    wins++;
    guessesLeft = 10;
    guesses = [];
    }

    if (compGuess != userGuess) {
    guessesLeft--;

    }

    if (guessesLeft == 0) {
    losses++;
    guessesLeft = 10;
    guesses = [];
    } 

    winsElem.textContent = wins;
    lossElem.textContent = losses;
    leftElem.textContent = guessesLeft;
    guessesElem.textContent = guesses;
}
}