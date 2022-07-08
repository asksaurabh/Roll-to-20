'use strict';

// Get hold of elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.getElementById("score--0");
const score1Element = document.querySelector("#score--1");
const diceImage = document.querySelector(".dice");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const btnNewGame = document.querySelector(".btn--new");
const current0Element = document.querySelector("#current--0");
const current1Element = document.querySelector("#current--1");

let finalScores, currentScore, activePlayer, isGameOver;

// Initial Conditions.
const init = function () {
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  finalScores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  isGameOver = false;

  diceImage.classList.add('hidden');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
}
init();

const switchPlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent = currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;

  // toggle -> add if not there, remove if there
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
}

// Add the functionality of rolling the dice.
btnRoll.addEventListener('click', function () {
  // Generate a random dice roll
  if (isGameOver === false) {
    const rollValue = Math.trunc(Math.random() * 6) + 1;

    // Display the image corrsponding to the roll value
    diceImage.classList.remove('hidden');
    diceImage.src = `dice-${rollValue}.png`;

    // Check if the rollValue is 1
    if (rollValue === 1) {
      switchPlayer();
    }
    else {
      currentScore += rollValue;
      document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    }
  }
});

// Add the functionality of holding scores.
btnHold.addEventListener('click', function () {
  if (isGameOver === false) {
    finalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = finalScores[activePlayer];

    if (finalScores[activePlayer] >= 20) {
      // activePlayer wins, end game
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
      diceImage.classList.add('hidden');
      isGameOver = true;
    }
    else {
      // Switch the player
      switchPlayer();
    }
  }
});

btnNewGame.addEventListener('click', init);