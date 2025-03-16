import React, { useState } from 'react';
import './TicTacToe.css';

const Square = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState('X');

  const calculateWinner = (board) => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const isBoardFull = (board) => board.every(val => val !== null);

  const handleClick = (index) => {
    if (board[index] !== null || calculateWinner(board) || isBoardFull(board)) {
      return;
    }
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer('X');
  };

  const winner = calculateWinner(board);
  const status = winner
    ? `Player ${winner} wins!`
    : isBoardFull(board)
    ? "It's a draw!"
    : `Next player: ${currentPlayer}`;

  return (
    <div className="game">
      <div className="status">{status}</div>
      <div className="board">
        <div className="row">
          <Square value={board[0]} onClick={() => handleClick(0)} />
          <Square value={board[1]} onClick={() => handleClick(1)} />
          <Square value={board[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="row">
          <Square value={board[3]} onClick={() => handleClick(3)} />
          <Square value={board[4]} onClick={() => handleClick(4)} />
          <Square value={board[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="row">
          <Square value={board[6]} onClick={() => handleClick(6)} />
          <Square value={board[7]} onClick={() => handleClick(7)} />
          <Square value={board[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;