// Copyright (c) 2021 Daniel Pawelko All rights reserved
//
// Created by: Daniel Pawelko
// Created on: May 2021
// This file contains the JS functions for index.html

"use strict"

// Storing random number in const variable
const number = Math.floor(Math.random() * 6) + 1 // returns a random intiger from 1 to 6
console.log(number)
// Defining function that actives when user presses "Check" Button
function userInputClick() {
  // Get input from user and store it in const variable
  const guess = parseInt(document.getElementById("guess-entered").value)

  // Check if guess == number
  if (guess === number){
    document.getElementById('output').innerHTML = "YOU GOT IT RIGHT! Random number is: " + number
  }
  
  // Check if guess != number
  if (guess != number){
    document.getElementById('output').innerHTML = "Number is incorrect"
  }
}