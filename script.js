/*Exercise 1 : Play A Guessing Game
Instructions
Create a new folder on your computer.
Clone or Download the index.html and style.css files from this github link.
Follow the steps written below
Steps
Explanation of the game : the point of the game is to guess the number that the computer has in “mind”.
First Part
Create a JS file and link it to the index.html file.
Take a look at your html file, you should have a button with an “onclick” event. This event is equal to the function playTheGame(). It means that when you will click on the button, the function playTheGame() will be called.
We will learn more about events next week ;)
Now let’s create the function:
In the JS file, create a function called playTheGame() that takes no parameter.
In the function, start by asking the user if they would like to play the game (Hint: use the built-in confirm() function).
If the answer is false, alert “No problem, Goodbye”.
If his answer is true, follow these steps:
Ask the user to enter a number between 0 and 10 (Hint: use the built-in prompt() function). You then have to check the validity of the user’s number :
If the user didn’t enter a number (ie. if he entered another data type) alert “Sorry Not a number, Goodbye”.
If the user didn’t enter a number between 0 and 10 alert “Sorry it’s not a good number, Goodbye”.
Else (ie. he entered a number between 0 and 10), create a variable named computerNumber where the value is a random number between 0 and 10 (Hint: Use the built-in Math.random() function). Make sure that the number is rounded.
Second Part
Outside of the playTheGame() function, create a new function named compareNumbers(userNumber,computerNumber) that takes 2 parameters : userNumber and computerNumber
The point of this function is to check if the userNumber is the same as the computerNumber:
If userNumber is equal to computerNumber, alert “WINNER” and stop the game.
If userNumber is bigger than computerNumber, alert “Your number is bigger then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).
If userNumber is lower than computerNumber, alert “Your number is smaller then the computer’s, guess again” (Hint: use the built-in prompt() function to ask the user for a new number).
If the user guessed more than 3 times, alert “out of chances” and exit the function.
Bonus
In the First Part, instead of stopping the process if the user didn’t enter a valid number. Continue asking for a number until the user enters a valid number. */

function playTheGame() {
  let userAnswer = confirm("Would you like to play the game");
  let userNumber;
  let computerNumber;
  if (userAnswer == false) {
    alert("No problem, Goodbye");
  } else {
    userNumber = prompt("Enter a number between 0 and 10");
    if (isNaN(userNumber)) {
      alert("Sorry Not a number, Goodbye");
    } else if (userNumber > 10 || userNumber < 0) {
      alert("Sorry it’s not a good number, Goodbye");
    } else {
      computerNumber = Math.round(Math.random() * 10);
    }
  }
  compareNumbers(userNumber, computerNumber);
}

function compareNumbers(userNumber, computerNumber) {
  let compte = 0;
  do {
    if (userNumber == computerNumber) {
      alert("WINNER");
      break;
    } else if (userNumber > computerNumber) {
      alert("Your number is bigger then the computer number");
      userNumber = prompt("Enter a number between 0 and 10");
    } else if (userNumber < computerNumber) {
      alert("Your number is less then the computer number");
      userNumber = prompt("Enter a number between 0 and 10");
    }
    compte++;
    if (compte == 3) {
      alert("out of chances");
      break;
    }
  } while (compte < 3);
}