// Count and Say
// https://leetcode.com/problems/count-and-say/submissions/

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  if (n == 1) {
      return "1"
  } else {
      let prev = countAndSay(n - 1)
      let groups = `${prev}`.match(/(\d)\1*/g)
      let next = groups.reduce( (ac, g) => `${ac}${g.length}${g.charAt(0)}`, '')
      return next
  }
};