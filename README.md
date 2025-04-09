# Guess My Number (JavaScript Game)

A simple number guessing game built using HTML, CSS, and JavaScript. The player attempts to guess a randomly generated number between 1 and 20. The game provides feedback whether the guess is too high, too low, or correct.

## Features

- Random number generation between 1 and 20
- Score system that starts at 20 and decreases with each incorrect guess
- Highscore tracking
- "Play Again" functionality to reset the game
- Visual feedback through background color changes and messages

## How to Play

- Enter a number between 1 and 20 in the input box
- Click the "Check" button to submit your guess
- The game will tell you if your guess is:
  - Too high
  - Too low
  - Correct
- If correct:
  - Background turns green
  - Highscore is updated
- If wrong:
  - Score is reduced by 1
- If score reaches 0:
  - Game ends with a "You lost" message
- Click the "Again" button to reset the game and play again

## Technologies Used

- HTML
- CSS
- JavaScript (DOM Manipulation, Event Listeners, Functions)

## Code Structure

- `randomInt`: Random number generated between 1 and 20
- `checkButton`: Button to check the guess
- `againButton`: Button to reset the game
- `haveGuess()`: Main function that handles guess checking and updates UI
- `changeMessage()`: Helper function to display messages


## Note

- The game resets the background color and score on clicking "Again", but the random number is not currently reset due to variable scoping.
- To fix this, consider moving `randomInt` into a globally accessible scope or making it part of a state object.

## License

This project does not use any license.
