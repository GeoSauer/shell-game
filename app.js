/* Imports */
import { getRandomItem } from './utils.js';

const guess1 = document.getElementById('guess-1');
const guess2 = document.getElementById('guess-2');
const guess3 = document.getElementById('guess-3');

const shell1 = document.getElementById('shell-1');
const shell2 = document.getElementById('shell-2');
const shell3 = document.getElementById('shell-3');

const pearl1 = document.getElementById('pearl-1');
const pearl2 = document.getElementById('pearl-2');
const pearl3 = document.getElementById('pearl-3');

const display1 = document.getElementById('display-1');
const display2 = document.getElementById('display-2');
const display3 = document.getElementById('display-3');

const guesses = document.getElementById('guesses');
// const results = document.getElementById('results');
const playAgainButton = document.getElementById('play-again-button');

/* State */
let gameState = 'guess'; // 'guess' or 'results'
let pick = ''; // 'guess1', 'guess2', or 'guess3'
let pearl = ''; // 'pearl1', 'pearl2', or 'pearl3'

/* Actions */
function loadPage() {
    if (gameState === 'guess') {
        displayShells();
    } else if (gameState === 'results') {
        displayResults();
    }
}

const locations = [pearl1, pearl2, pearl3];

function findPearl() {
    gameState = 'results';
    pearl = getRandomItem(locations);
    pearl.classList.remove('hidden');
    loadPage();
}

// display
function displayShells() {
    if (gameState === 'guess') {
        shell1.classList.remove('reveal');
        shell2.classList.remove('reveal');
        shell3.classList.remove('reveal');
        pearl1.classList.add('hidden');
        pearl2.classList.add('hidden');
        pearl3.classList.add('hidden');
        // guess1.classList.remove('hidden');
        // guess2.classList.remove('hidden');
        // guess3.classList.remove('hidden');
        guesses.classList.remove('hidden');
        display1.classList.add('hidden');
        display2.classList.add('hidden');
        display3.classList.add('hidden');
        // results.classList.add('hidden');
        playAgainButton.classList.add('hidden');
    }

    if (gameState === 'results') {
        guesses.classList.add('hidden');
        playAgainButton.classList.remove('hidden');
    }
}

function displayResults() {
    if (pick === 'shell1' && pearl === pearl1) {
        shell1.classList.add('reveal');
        display1.classList.remove('hidden');
        display1.textContent = 'You found it!';
    }
    if (pick === 'shell1' && pearl === pearl2) {
        shell1.classList.add('reveal');
        shell2.classList.add('reveal');
        display1.classList.remove('hidden');
        display1.textContent = 'No pearl here!';
    }
    if (pick === 'shell1' && pearl === pearl3) {
        shell1.classList.add('reveal');
        shell3.classList.add('reveal');
        display1.classList.remove('hidden');
        display1.textContent = 'No pearl here!';
    }

    if (pick === 'shell2' && pearl === pearl2) {
        shell2.classList.add('reveal');
        display2.classList.remove('hidden');
        display2.textContent = 'You found it!';
    }
    if (pick === 'shell2' && pearl === pearl1) {
        shell2.classList.add('reveal');
        shell1.classList.add('reveal');
        display2.classList.remove('hidden');
        display2.textContent = 'No pearl here!';
    }
    if (pick === 'shell2' && pearl === pearl3) {
        shell2.classList.add('reveal');
        shell3.classList.add('reveal');
        display2.classList.remove('hidden');
        display2.textContent = 'No pearl here!';
    }

    if (pick === 'shell3' && pearl === pearl3) {
        shell3.classList.add('reveal');
        display3.classList.remove('hidden');
        display3.textContent = 'You found it!';
    }
    if (pick === 'shell3' && pearl === pearl1) {
        shell3.classList.add('reveal');
        shell1.classList.add('reveal');
        display3.classList.remove('hidden');
        display3.textContent = 'No pearl here!';
    }
    if (pick === 'shell3' && pearl === pearl2) {
        shell3.classList.add('reveal');
        shell2.classList.add('reveal');
        display3.classList.remove('hidden');
        display3.textContent = 'No pearl here!';
    }
}

// event listeners
guess1.addEventListener('click', () => {
    gameState = 'results';
    pick = 'shell1';
    displayShells();
    findPearl();
    displayResults();
});

guess2.addEventListener('click', () => {
    gameState = 'results';
    pick = 'shell2';
    displayShells();
    findPearl();
    displayResults();
});

guess3.addEventListener('click', () => {
    gameState = 'results';
    pick = 'shell3';
    displayShells();
    findPearl();
    displayResults();
});

playAgainButton.addEventListener('click', () => {
    gameState = 'guess';
    loadPage();
});

//* Run page load code
loadPage();
