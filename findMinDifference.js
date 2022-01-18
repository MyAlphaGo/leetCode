### 539. 最小时间差(https://leetcode-cn.com/problems/minimum-time-difference/)
#### 描述            
给定一个 24 小时制（小时:分钟 "HH:MM"）的时间列表，找出列表中任意两个时间的最小时间差并以分钟数表示。

#### 示例 1：

输入：timePoints = ["23:59","00:00"]
输出：1
示例 2：

输入：timePoints = ["00:00","23:59","00:00"]
输出：0
 

#### 提示：
2 <= timePoints.length <= 2 * 104
timePoints[i] 格式为 "HH:MM"

```js
/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function (timePoints) {
    const MAX_VALUE = 24 * 60
    const getMinutes = str => {
        const [h, m] = str.split(':')
        return result = h * 60 + Number(m)
    }
    timePoints = timePoints.map(getMinutes).sort((a,b) => a - b)
    let minValue = MAX_VALUE
    const len = timePoints.length
    for (let i = 1; i < len; i++) {
        minValue = Math.min(timePoints[i] - timePoints[i - 1], minValue)
    }
    return Math.min(minValue, Math.abs((timePoints[0] + MAX_VALUE) - timePoints[len - 1]))

};
```
