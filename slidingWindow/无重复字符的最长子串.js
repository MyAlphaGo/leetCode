// 3. 无重复字符的最长子串
// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if(s.length < 2) {
        return s.length
    }
    const uniqueSet = new Set()
    let count = 0
    let end = 0
    let head = 0

    while (end < s.length) {
        if (!uniqueSet.has(s[end])) {
            uniqueSet.add(s[end])
            end++
        } else {
            if (end - head > count) {
                count = end - head
            }
            while (s[head] !== s[end]) {
                uniqueSet.delete(s[head])
                head++
            }
            head++
            end++
        }
    }
    return Math.max(count, end - head)

};
