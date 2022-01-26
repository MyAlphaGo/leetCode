// 2150. 找出数组中的所有孤独数字
// 给你一个整数数组 nums 。如果数字 x 在数组中仅出现 一次 ，且没有 相邻 数字（即，x + 1 和 x - 1）出现在数组中，则认为数字 x 是 孤独数字 。

// 返回 nums 中的 所有 孤独数字。你可以按 任何顺序 返回答案。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-all-lonely-numbers-in-the-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findLonely = function(nums) {
    const map = new Map()
    nums.forEach(item => map.set(item, (map.get(item) || 0) + 1))
    const result = []
    nums.forEach(item => {
        if(map.get(item) < 2 && !map.has(item - 1) && !map.has(item + 1)) {
            result.push(item)
        }
    })
    return result
};
