// 给你一个整数数组 nums ，请你找出数组中乘积最大的连续子数组（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
    const len = nums.length
    let max = nums[0]
    let min = nums[0]
    let result = nums[0]
    if(len < 2) {
        return nums[0] || 0
    }
    for(let i = 1; i< len; i++) {
        const mx = max
        const mn = min
        max = Math.max(nums[i], Math.max(mx * nums[i], mn * nums[i]))
        min = Math.min(nums[i], Math.min(mx * nums[i], mn * nums[i]))

        result = Math.max(result, max)
    }

    return result
};

