### 17. 电话号码的字母组合(https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/)
#### 描述
  给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。
  给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
  
```js
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if(digits.length === 0) {
        return []
    }
    const map = [
        [],
        [],
        ['a', 'b', 'c'],
        ['d', 'e', 'f'],
        ['g', 'h', 'i'],
        ['j', 'k', 'l'],
        ['m', 'n', 'o'],
        ['p', 'q', 'r', 's'],
        ['t', 'u', 'v'],
        ['w', 'x', 'y', 'z'],
    ]
    const unique = {}
    const dp = (digits, str) => {
        if (digits.length === 1) {
            for (let i = 0; i < map[digits[0]].length; i++) {
                unique[`${str}${map[digits[0]][i]}`] = true
            }
            return
        }
        for (let i = 0; i < map[digits[0]].length; i++) {
            dp(digits.slice(1), `${str}${map[digits[0]][i]}`)
        }

    }
    dp(digits, '')
    return Object.keys(unique)
};
```
