/* Imports */
// import { getRandomItem } from './utils.js';

/* State */
// let gameState = 'guess'; // 'guess' or 'results'
// let guess = ''; // 'left' 'middle' or 'right'
// let pearl = ''; // 'true' or 'false'
// let result = ''; //'win' or 'lose'

/* Actions */
function loadPage() {
    displayShells();
    // displayResults();
}

// const choices = ['left', 'middle', 'right'];

// function findPearl(userGuess) {
//     gameState = 'results';
//     guess = userGuess;
//     pearl = getRandomItem(choices);
// }

/* Components */

/* Component */
// get DOM
const guess1 = document.getElementById('guess-1');
const guess2 = document.getElementById('guess-2');
const guess3 = document.getElementById('guess-3');
const shell1 = document.getElementById('shell-1');
// const shell2 = document.getElementById('shell-2');
// const shell3 = document.getElementById('shell-3');
const pearl1 = document.getElementById('pearl-1');
// const pearl2 = document.getElementById('pearl-2');
// const pearl3 = document.getElementById('pearl-3');
const display1 = document.getElementById('display-1');
// const display2 = document.getElementById('display-2');
const display3 = document.getElementById('display-3');
const playAgain = document.getElementById('play-again-button');

// display
function displayShells() {
    shell1.classList.remove('reveal');
    pearl1.classList.add('hidden');
    display1.classList.add('hidden');
    display3.classList.add('hidden');
    playAgain.classList.add('hidden');

    // if (gameState === 'guess') {
    // //     // guess is guess-1
    //     if (guess === 'left') {
    // //         // reveal shell-1
    //         guess1.classList.reveal('shell-1');
    //         // check for pearl
    //     }
    // }
}

// function displayResults() {
//     display1.classList.remove('hidden');
//     display3.classList.remove('hidden');
//     playAgain.classList.remove('hidden');
//     guess1.classList.add('hidden');
//     guess2.classList.add('hidden');
//     guess3.classList.add('hidden');
// }

// event listeners
guess1.addEventListener('click', () => {
    // shell1.classList.add('reveal');
    // findPearl('left');
});
guess2.addEventListener('click', () => {
    // shell2.classList.add('reveal');
    // findPearl('middle');
});
guess3.addEventListener('click', () => {
    // shell3.classList.add('reveal');
    // findPearl('right');
});
//* Run page load code
loadPage();
