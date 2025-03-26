import React,{useState} from 'react'

const Task10= () => {
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isXNext, setIsXNext] = useState(true);
  
    const calculateWinner = (squares) => {
      const lines = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
      ];
      for (let line of lines) {
        const [a, b, c] = line;
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
          return squares[a];
        }
      }
      return null;
    };
  
    const winner = calculateWinner(board);
    const handleClick = (index) => {
      if (board[index] || winner) return;
      const newBoard = board.slice();
      newBoard[index] = isXNext ? "X" : "O";
      setBoard(newBoard);
      setIsXNext(!isXNext);
    };
  
    const resetGame = () => {
      setBoard(Array(9).fill(null));
      setIsXNext(true);
    };
  return (
    <div className="game-container">
      <h1>Tic-Tac-Toe</h1>
      <div className="board">
        {board.map((value, index) => (
          <button key={index} className="square" onClick={() => handleClick(index)}>
            {value}
          </button>
        ))}
      </div>
      <h2>{winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? "X" : "O"}`}</h2>
      <button className="reset" onClick={resetGame}>Reset</button>
    </div>
  )
}

export default Task10;
