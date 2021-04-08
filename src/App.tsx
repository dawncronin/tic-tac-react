import React, { useState } from 'react';

import Space from './space'
import { winningConditionsMet, computerMoves } from './utils'
import './App.css';

function App() {
  const defaultBoard = (["", "", "", "", "", "", "", "", ""])
  const [board, setBoard] = useState(defaultBoard)
  const [playerTurn, setPlayerTurn] = useState("X")
  const [gameStatus, setGameStatus] = useState('none')
  const [moveCount, setMoveCount] = useState(0)

  const onComputerMove = async () => {
    console.log('move')
    setTimeout(() => {
      let move = computerMoves(board)
      let newBoard = board
      newBoard[move] = "O"
      setBoard(newBoard)
      if (winningConditionsMet(newBoard, "O", move)) {
        setGameStatus('done')
        return
      }
      setMoveCount(moveCount + 2)
      setPlayerTurn("X")
    }, 500)

  }

  const  onPlayerMove = async (position: number) => {
    if (board[position] !== "" || (gameStatus !== "player" && gameStatus !== "computer")) {
      return
    }

    let newBoard = board
    newBoard[position] = playerTurn
    setBoard(newBoard)
    if (winningConditionsMet(newBoard, playerTurn, position)) {
      setGameStatus('done')
      return
    }

    await setMoveCount(moveCount + 1)
    if ( playerTurn === "X") {
     await setPlayerTurn("O")
    } else {
      await setPlayerTurn("X")
    }

    if (gameStatus === 'computer' && moveCount < 8) {
      onComputerMove()
    }
    if (moveCount >= 8) {
      setGameStatus('none')
    }
  }

  const boardComponents = board.map((space, i) => <Space key={i} spaceValue={space} position={i} onPlayerMove={onPlayerMove}/>)


  return (
    <div className="App">
      <h1>TIC TAC REACT</h1>
      <h4>Play against the computer, or a friend!</h4>

      <button onClick={ () => {
        setGameStatus('computer')
        setMoveCount(0)
        setBoard(defaultBoard)
        setPlayerTurn("X")
      }}>Play Against The Computer</button>

      <button onClick={ () => {
        setGameStatus('player')
        setMoveCount(0)
        setBoard(defaultBoard)
        setPlayerTurn("X")
      }}>Play Against Another Player</button>

      <h3>{moveCount === 9? "Cat's Game!" : null}</h3>

      <h3>{gameStatus === 'done'? `${playerTurn} Wins!` : null}</h3>
      
      <h3>{gameStatus === 'player'? `It's ${playerTurn}'s Turn`: null}</h3>
      <h3>{gameStatus === 'computer'? `It's ${playerTurn}'s Turn`: null}</h3>
      <div className="board">
        {boardComponents}
      </div>

    </div>
  );
}

export default App;
