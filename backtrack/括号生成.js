// 括号生成
// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/generate-parentheses
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。



/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    const result = [];
    const dp = (nextCount, backCount, str) => {
        
        if (nextCount === 0) {
            while (backCount--) {
                str += ')';
            }
            return result.push(str);
        }

        nextCount && dp(nextCount - 1, backCount + 1, `${str}(`);
        backCount && dp(nextCount, backCount - 1, `${str})`);
    };
    dp(n, 0, '');
    return result;
};

