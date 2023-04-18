import { useState } from "react"
import { Square } from "./components/Square.jsx"
import { TURNS } from "./constants.js"
import { checkWinnerFrom} from "./logic/board.js" 
import { WinnerModal } from "./components/WinnerModal.jsx"

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [winner, setWinner] = useState(null)

  

  const resetGame = () =>{
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
  }

  const checkEndgame = (newBoard) =>{
    return newBoard.every((square) => square !=null)
  }
  const updateBoard = (index) =>{
    if (board[index] || winner) return
    
    const newBoard = [... board]
    newBoard[index] = turn 
    setBoard(newBoard)

    const newTurn = turn == TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner){
      setWinner(newWinner)
    } else if (checkEndgame(newBoard)){
      setWinner(false)
    }
  }

  return (
    <main className='board'>
        <h1>Tic Tac</h1>
        <button onClick={resetGame}>Resetear juego</button>
        <section className="game">
          {
            board.map((_, index)=>{
              return (
                <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {board[index]}
                </Square>  
              )
              
            })

          }
        </section>

        <section className="turn">
          <Square isSelected={turn == TURNS.X}>{TURNS.X}</Square>
          <Square isSelected={turn == TURNS.O}>{TURNS.O}</Square>
        </section>

        <WinnerModal resetGame={resetGame} winner={winner}/>

    </main>
  )
  
}

export default App
