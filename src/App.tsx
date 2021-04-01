import React, { useState } from 'react';

import Space from './space'
import winningConditionsMet from './utils'
import './App.css';

function App() {

  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""])
  const [playerTurn, setPlayerTurn] = useState("X")
  const [gameStatus, setGameStatus] = useState(false)
  const [moveCount, setMoveCount] = useState(0)



  const onPlayerMove = (position: number) => {
    if ( board[position] !== "" || gameStatus) {
      return
    }
    let newBoard = board
    newBoard[position] = playerTurn
    setBoard(newBoard)
    if (winningConditionsMet(newBoard, playerTurn, position)) {
      setGameStatus(true)
      return
    }
    setMoveCount(moveCount + 1)
    if ( playerTurn === "X") {
      setPlayerTurn("O")
    } else {
      setPlayerTurn("X")
    }
    
  }

  const boardComponents = board.map((space, i) => <Space key={i} spaceValue={space} position={i} onPlayerMove={onPlayerMove}/>)


  return (
    <div className="App">
      <h1>TIC TAC REACT</h1>
      <h3>{moveCount === 9? "Cat's Game!" : 
      gameStatus? `${playerTurn} Wins!` : `It's ${playerTurn}'s Turn`
      } </h3>
      <div className="board">
        {boardComponents}
      </div>
    </div>
  );
}

export default App;
