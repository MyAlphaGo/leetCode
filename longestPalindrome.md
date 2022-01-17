链接：https://leetcode-cn.com/problems/longest-palindromic-substring/

给你一个字符串 s，找到 s 中最长的回文子串。
 

示例 1：

输入：s = "babad"
输出："bab"
解释："aba" 同样是符合题意的答案。


```js
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const dp = new Array(s.length).fill(true).map(item => new Array(s.length).fill(false))
    const len = s.length
    for (let i = 0; i < s.length; i++) {
        dp[i][i] = true
    }
    let begin = 0
    let maxLen = 1
    for (let child = 2; child <= len; child++) {
        for (let left = 0; left < len; left++) {
            const right = child + left - 1

            if (right - left >= child) {
                break
            }

            if (s[left] !== s[right]) {
                dp[left][right] = false
            } else {
                if (right - left < 3) {
                    dp[left][right] = true
                }else {
                    dp[left][right] = dp[left + 1][right - 1]
                }
                
            }

            if(dp[left][right] && right - left + 1 > maxLen) {
                begin = left
                maxLen = right - left + 1
            }
        }
    }

    return s.slice(begin, begin+ maxLen)

};
```
