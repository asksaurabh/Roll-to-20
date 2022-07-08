'use strict';

// Get hold of elements
const score0Element = document.getElementById("score--0");
const score1Element = document.querySelector("#score--1");
const dice = document.querySelector(".dice");

// Initial Conditions.
score0Element.textContent = 0;
score1Element.textContent = 0;
dice.classList.add('hidden');