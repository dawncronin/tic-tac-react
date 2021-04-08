const winningConditionsMet = (board: string[],  player: string, index: number) => {

    const cords = [Math.floor(index/3), index - Math.floor(index/3)*3]
    const newBoard = [[board[0], board[1], board[2]], [board[3], board[4], board[5]], [board[6], board[7], board[8]]]

    //check row
    for (let i = 0; i < 3; i++) {
        if (newBoard[cords[0]][i] !== player) {
            break
        }
        if ( i === 2) {
            return true
        }
    }
    //check column
    for (let i = 0; i < 3; i++) {
        if (newBoard[i][cords[1]] !== player) {
            break
        }
        if ( i === 2) {
            return true
        }
    }

    //check diagnols

    if (cords[0] === cords[1]){
        if (newBoard[0][0] === player && newBoard[1][1] === player && newBoard[2][2] === player) {
            return true
        }
        if (newBoard[0][2] === player && newBoard[1][1] === player && newBoard[2][0] === player) {
            return true
        }
    }

    return false

}


const computerMoves = (board: string[]) => {

    let validMove = false
    let randomNum = 0
    while(!validMove) {
        randomNum = Math.floor(Math.random() * 9)
        if ( board[randomNum] === "") {
            validMove = true
        }
    }
    return randomNum
}

export  { winningConditionsMet, computerMoves }