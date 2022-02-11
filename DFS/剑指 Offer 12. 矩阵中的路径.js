// 给定一个 m x n 二维字符网格 board 和一个字符串单词 word 。如果 word 存在于网格中，返回 true ；否则，返回 false 。
// 单词必须按照字母顺序，通过相邻的单元格内的字母构成，其中“相邻”单元格是那些水平相邻或垂直相邻的单元格。同一个单元格内的字母不允许被重复使用。
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const maxRow = board.length - 1
    const maxCol = board[0].length - 1
    const wordLen = word.length - 1
    const dfs = (row, col, index) => {
        // 越界判断
        if (row < 0 || row > maxRow || col < 0 || col > maxCol) {
            return false
        }
        // 二次访问
        if (board[row][col] !== word[index]) {
            return false
        }
        // 单词访问完毕
        if (index === wordLen) {
            return true
        }
        board[row][col] = '*'
        const result = dfs(row + 1, col, index + 1) || dfs(row - 1, col, index + 1) || dfs(row, col + 1, index + 1) || dfs(row, col - 1, index + 1)
        board[row][col] = word[index]
        return result
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(i, j, 0)) {
                return true
            }
        }
    }
    return false
};
