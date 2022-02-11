
// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function (nums) {
    let start = 0
    let end = nums.length - 1

    while (start < end) {
        while (nums[start] % 2 !== 0 && start < end) {
            start++
        }

        while (nums[end] % 2 === 0 && start < end) {
            end--
        }

        if (start < end) {
            // const temp = nums[start]
            // nums[start] = nums[end]
            // nums[end] = temp

            nums[start] += nums[end]
            nums[end] = nums[start] - nums[end]
            nums[start] = nums[start] - nums[end]
        }

    }
    return nums
};
