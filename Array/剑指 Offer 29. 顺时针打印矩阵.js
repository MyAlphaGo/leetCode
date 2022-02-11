// 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    // 
    if (matrix.length === 0) {
        return []
    }
    // 边界
    let border = {
        top: 0,
        bottom: matrix.length - 1,
        left: 0,
        right: matrix[0].length - 1,
    }
    // 方向 lr:→, tb: ↓, rl: ←, bt: ↑
    let DIRECTION = ['lr', 'tb', 'rl', 'bt']
    let directionIndex = 0

    let row = 0
    let col = 0

    const result = []
    // 根据方向处理边界
    const handlerBorder = (direction, { top, bottom, left, right }) => {
        if (direction === 'lr') {
            top++
        }
        if (direction === 'tb') {
            right--
        }
        if (direction === 'rl') {
            bottom--
        }
        if (direction === 'bt') {
            left++
        }
        return { top, bottom, left, right }
    }
    // 根据方向进行移动
    const move = (row, col, direction) => {
        if (direction === 'lr') {
            return [row, col + 1]
        }
        if (direction === 'tb') {
            return [row + 1, col]
        }
        if (direction === 'rl') {
            return [row, col - 1]
        }
        if (direction === 'bt') {
            return [row - 1, col]
        }
    }

    while (result.length !== matrix.length * matrix[0].length) {
        // 抵达边界时
        if (row < border.top || row > border.bottom || col < border.left || col > border.right) {
            border = handlerBorder(DIRECTION[directionIndex], border)
            directionIndex = (directionIndex + 1) % DIRECTION.length
            // 处理越界的值
            if (row > border.bottom) row = border.bottom
            if (row < border.top) row = border.top
            if (col < border.left) col = border.left
            if (col > border.right) col = border.right
        }

        result.push(matrix[row][col])

        let location = move(row, col, DIRECTION[directionIndex])
        row = location[0]
        col = location[1]
    }

    return result
};
