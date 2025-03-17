# Not Working
# Tic Tac Toe Game

This is a simple Tic Tac Toe game built with React. It allows two players to play against each other, indicates whose turn it is, detects wins and draws, and provides a reset button to start a new game.

## Installation

1. **Clone the Repository**  
   ```bash
   git clone https://github.com/hooiv/tic-tac-toe.git
   ```
Replace yourusername with your actual GitHub username.

Navigate to the Project Directory
  ```bash
  cd tic-tac-toe
  ```
Install Dependencies
 ```bash
 npm install
 ```
This installs all the necessary packages listed in package.json.
Running the App
To start the development server, run:

```bash
npm start
```

Then, open your browser and go to http://localhost:3000 to play the game.

## How to Play
The game is played on a 3x3 grid.
Players take turns placing their mark ('X' or 'O') on an empty square.
The first player to get three of their marks in a row (horizontally, vertically, or diagonally) wins.
If all squares are filled without a winner, the game ends in a draw.
Click the "Reset Game" button to start a new game.
## Requirements
Node.js >= 14.0.0
npm >= 5.6
## Building for Production
To create an optimized production build, run:
```bash
npm run build
```
This generates a build directory containing the production-ready files.

## License
This project is licensed under the MIT License.

---

### Notes

- **Running Instructions**: The steps above for running the component assume you’re starting from scratch with your `TicTacToe.js` file. If you’ve already set up the app and pushed it to GitHub, users can simply follow the README’s instructions after cloning the repo.
