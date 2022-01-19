### 1423. 可获得的最大点数(https://leetcode-cn.com/problems/maximum-points-you-can-obtain-from-cards/)

#### 描述
几张卡牌 排成一行，每张卡牌都有一个对应的点数。点数由整数数组 cardPoints 给出。

每次行动，你可以从行的开头或者末尾拿一张卡牌，最终你必须正好拿 k 张卡牌。

你的点数就是你拿到手中的所有卡牌的点数之和。

给你一个整数数组 cardPoints 和整数 k，请你返回可以获得的最大点数。

```js
/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */
var maxScore = function (cardPoints, k) {
    const count = cardPoints.reduce((count, num) => count + num, 0)
    // 从解析得到思路：剩下的卡牌一定是连续的，则可以将问题转化为寻找数组中长度为len-k的最小和。
    const findMinSum = (cardPoints, section) => {
        let result = Number.MAX_SAFE_INTEGER
        let sum = 0
        for (let i = 0; i < cardPoints.length; i++) {
            if (i >= section) {
                result = Math.min(result, sum)
                sum -= cardPoints[i - section]
            }
            sum += cardPoints[i]
        }
        return Math.min(result, sum)
    }
    return count-findMinSum(cardPoints, cardPoints.length - k)
};
```
