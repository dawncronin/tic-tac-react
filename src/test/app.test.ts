import winningConditionsMet from '../utils'

test('should return true when X wins on horizontal', () => {
    const board = ["X", "X", "X", "O", "", "O", "", "", ""]
    const index = 1
    const player = "X"
    expect(winningConditionsMet(board, player, index)).toBe(true)
})

test('should return false when there is no win', () => {
    const board = ["X", "O", "X", "O", "", "O", "X", "", ""]
    const index = 1
    const player = "O"
    expect(winningConditionsMet(board, player, index)).toBe(false)
})

test('should return true when there is a win on a diagnal', () => {
    const board = ["X", "O", "", "O", "X", "O", "X", "", "X"]
    const index = 0
    const player = "X"
    expect(winningConditionsMet(board, player, index)).toBe(true)
})



