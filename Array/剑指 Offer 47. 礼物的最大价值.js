// 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxValue = function (grid) {
    const getMaxNum = (num1=0, num2=0) => Math.max(num1, num2)
    for (let row = 0; row < grid.length; row++) {
        for(let col = 0; col < grid[0].length; col++) {
            grid[row][col] += getMaxNum(grid[row - 1]?grid[row - 1][col]:0, grid[row][col - 1])
        }
    }
    return grid[grid.length - 1][grid[0].length - 1]
};
