'use strict';

function Player(name, sign) {
  this.name = name;
  this.sign = sign;
  this.hasWon = false;
}

let Game = {
  player1: null,
  player2: null,
  currentPlayer: null,
  gameboard: Array(3)
    .fill()
    .map(() => Array(3).fill('')),
  winningConditions: [
    [[0, 0], [0, 1], [0, 2]],
    [[1, 0], [1, 1], [1, 2]],
    [[2, 0], [2, 1], [2, 2]],
    [[0, 0], [1, 0], [2, 0]],
    [[0, 1], [1, 1], [2, 1]],
    [[0, 2], [1, 2], [2, 2]],
    [[0, 0], [1, 1], [2, 2]],
    [[0, 2], [1, 1], [2, 0]]
  ],

  createPlayers: function (namePlayer1, namePlayer2) {
    this.player1 = new Player(namePlayer1, 'X');
    this.player2 = new Player(namePlayer2, 'O');
    this.currentPlayer = this.player1;
  },

  checkWin: function () {
    this.winningConditions.forEach((condition) => {
      if (
        this.gameboard[condition[0][0]][condition[0][1]] === this.player1.sign &&
        this.gameboard[condition[1][0]][condition[1][1]] === this.player1.sign &&
        this.gameboard[condition[2][0]][condition[2][1]] === this.player1.sign
      ) {
        this.player1.hasWon = true;
        alert(this.player1.name + ' has won! Press reset to play again.');
        this.reset();
      } else if (
        this.gameboard[condition[0][0]][condition[0][1]] === this.player2.sign &&
        this.gameboard[condition[1][0]][condition[1][1]] === this.player2.sign &&
        this.gameboard[condition[2][0]][condition[2][1]] === this.player2.sign
      ) {
        this.player2.hasWon = true;
        alert(this.player2.name + ' has won! Press reset to play again.');
        this.reset();
      }
    });

    if (!this.player1.hasWon && !this.player2.hasWon) {
      this.currentPlayer = this.currentPlayer === this.player1 ? this.player2 : this.player1;
    }
  },

  reset: function () {
    this.gameboard = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];

    this.player1.hasWon = false;
    this.player2.hasWon = false;

    this.currentPlayer = this.player1;

    let gameboardDiv = document.getElementById('gameboard');
    let gameboardCells = gameboardDiv.getElementsByTagName('div');
    for (let i = 0; i < gameboardCells.length; i++) {
      gameboardCells[i].textContent = '';
    }
  }
};

document.getElementById('reset').addEventListener('click', function () {
  Game.reset();
});

document.getElementById('startGrid').addEventListener('submit', function (e) {
  e.preventDefault();
  const namePlayer1 = document.getElementById('player1').value;
  const namePlayer2 = document.getElementById('player2').value;
  Game.createPlayers(namePlayer1,namePlayer2);
  document.getElementById('startGrid').style.display = 'none';
  document.getElementById('reset').style.display = 'block';
  document.getElementById('gameboard').style.display = 'grid';
  });
  
  document.getElementById('gameboard').addEventListener('click', function (e) {
  if (e.target.textContent === '') {
  e.target.textContent = Game.currentPlayer.sign;
  const gridIndex = Math.floor(Array.from(e.currentTarget.children).indexOf(e.target) / 3);
  const columnIndex = Array.from(e.currentTarget.children).indexOf(e.target) % 3;
  Game.gameboard[gridIndex][columnIndex] = Game.currentPlayer.sign;
  Game.checkWin();
  }
  });
