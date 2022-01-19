/*
 * @lc app=leetcode.cn id=76 lang=javascript
 *
 * [76] 最小覆盖子串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  const map = {}
  const current = {}
  let left = 0
  let right = 0
  let result = s + 'a'
  t.split('').forEach(character => map[character] = (map[character] || 0) + 1)
  Object.keys(map).forEach(character => current[character] = 0)
  
  const check = () => {
    if(right - left + 1 < t.length) return false 
    return !Object.keys(map).some(character => current[character] < map[character])
  }
  current[s[0]] = 1
  while(right<s.length) {
    if(!check()) {
      current[s[++right]] = (current[s[right]] || 0) + 1
    }else {
      if(s.slice(left, right+1).length < result.length) {
        result = s.slice(left, right+1)
      }
      current[s[left]]--
      left++
    }
  }
  if(result.length > s.length) {
    return ''
  }
  return result
};

// @lc code=end

// 对模板constant和data.constant进行处理
handleDataAndTemplate(data, templateConstants) {
  let constantsKeys = Object.keys(templateConstants)
  if (data) {
    const constantsData =
      typeof data.constant === 'string'
        ? JSON.parse(data.constant)
        : data.constant
    constantsKeys = constantsKey
      .map(key => {
        const index = constantsData[key]
          ? constantsData[key].showIndex || constantsData[key].index
          : Number.MAX_SAFE_INTEGER
        return { key, index }
      })
      .sort((a, b) => a.index - b.index)
      .map(item => item.key)
    // 删除data.constant中不存在于模板中的参数,以及添加模板新增的参数到data.constant。
    const constant = data.constant
    data.constant = {}
    constantsKeys.forEach(
      key => (data.constant[key] = constant[key] || templateConstants[key])
    )
    this.data = data
  }
  return constantsKeys
},
const constantsKeys = this.handleDataAndTemplate(this.data, constants)

arr = this.getConstantArray(this.data.constant)

getConstantArray(constant) {
  constant = constant === 'string' ? JSON.parse(constant) : constant
  return Object.values(constant).sort(
    (a, b) =>
      Number(a.showIndex || a.index) - Number(b.showIndex || b.index)
  )
},

