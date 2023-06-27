# Tic-Tac-Toe
This is a simple Tic-Tac-Toe game mainly made with JavaScript. it's meant to be played with 2 players. Styled with HTML and CSS, aiming for a sleek and responsive user friendly interface 

#### How to use
1. Open the link: https://paulp111.github.io/Tic-Tac-Toe/ or download the files and open the html.
2. Insert the player Names in the input field (or just leave them clear).
3. Press the "Start Game" button.
4. The gameboard will appear and player 1 starts by clicking on a field of choice.
5. If one player has 3 signs in a row, the player wins and an alert will pop up announcing the win.
6. Press the "Reset" button to clear the gameboard.

### Explaination of the JS Code:
Factory Function: The Player function acts as a factory function to create player objects with properties such as name, sign, and hasWon.

Game Object: The Game object manages the game state and contains properties like player1, player2, currentPlayer, gameboard, and winningConditions.

Methods: The Game object has methods like createPlayers, checkWin, and reset to create players, check for a win condition, and reset the gameboard.

Event Listeners: Event listeners are set up for the reset button, form inputs, and gameboard clicks to handle user interactions and update the game accordingl to the input.

#### HTML/CSS
The HTML/CSS aims for a sleek and responsive interace. It features a modern minimalistic design with for a user friendly experience. 
