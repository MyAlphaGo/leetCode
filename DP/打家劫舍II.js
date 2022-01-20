// 213. 打家劫舍 II
// 你是一个专业的小偷，计划偷窃沿街的房屋，每间房内都藏有一定的现金。这个地方所有的房屋都 围成一圈 ，这意味着第一个房屋和最后一个房屋是紧挨着的。同时，相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警 。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 在不触动警报装置的情况下 ，今晚能够偷窃到的最高金额。
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/house-robber-ii
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length < 2) {
        return nums[0] || 0
    }
    
    // 在这里体现一个想法上变通：因为房屋围成了一个圈，所以我们必然不能同时打劫第一间房和最后一间房。
    // 所以在上面的基础上，我们可以将这一圈房屋拆成2部分，一部分不包含最后一间房，另一部分不包含第一间房。这时单独处理其中一部分时就和198.打家劫舍一样了
    const getMaxCost = costs => {
        if (costs.length < 2) {
            return costs[0] || 0
        }
        const len = costs.length
        costs[2] += costs[0]
        for (let i = 3; i < len; i++) {
            costs[i] += Math.max(costs[i - 2], costs[i - 3])
        }
        return Math.max(costs[len - 1], costs[len - 2])
    }
    
    return Math.max(getMaxCost(nums.slice(0, nums.length - 1)), getMaxCost(nums.slice(1)))
};
