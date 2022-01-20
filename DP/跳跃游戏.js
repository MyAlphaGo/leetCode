// 55. 跳跃游戏
// 给定一个非负整数数组 nums ，你最初位于数组的 第一个下标 。

// 数组中的每个元素代表你在该位置可以跳跃的最大长度。

// 判断你是否能够到达最后一个下标。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/jump-game
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const len = nums.length
    let maxLocation = nums[0]

    for(let i = 1; i<len;i++) {
        if(maxLocation < i) {
            return false
        }
        maxLocation = Math.max(maxLocation, i + nums[i])
    }
    return true
};
