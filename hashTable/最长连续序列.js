// 128. 最长连续序列
// 给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。

// 请你设计并实现时间复杂度为 O(n) 的算法解决此问题。



/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    const set = new Set(nums)

    let count = 0

    for(let num of nums) {
        if(!set.has(num - 1)) {

            let currentNum = num
            let currentCount = 1

            while(set.has(currentNum + 1)) {
                currentCount++
                currentNum++
            }
            count = Math.max(count,currentCount)
        }
    }
    return count
};
