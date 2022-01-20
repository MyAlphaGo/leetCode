// 198. 打家劫舍
// 你是一个专业的小偷，计划偷窃沿街的房屋。每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。

// 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/house-robber
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if (nums.length < 2) {
        return nums[0] || 0
    }
    const len = nums.length
    nums[2] += nums[0]
    for (let i = 3; i < len; i++) {
        // 根据题意，我们打劫的目标不能相邻，必须要有间隔，那如何找出一条路径使得打劫获利最大呢？
        // 我们在打劫第n间房之前，可以打劫第n-2房屋，可以打劫n-3房屋，可以打劫n-4房屋...，但其实如果我们要打劫第n-4间房屋的同时，我们可以打劫第n-2房屋，所以我们打劫第n-2房屋其实是包含n-4的，所以我们只需要从n-2和n-3中选取一个更大的房屋进行打劫即可。
        // 由此可以得到状态转移方程： f(n) = a[n] + Math.max(a[n - 2], a[n - 3])
        nums[i] += Math.max(nums[i - 2], nums[i - 3])
    }
    return Math.max(nums[len - 1], nums[len - 2])
};
