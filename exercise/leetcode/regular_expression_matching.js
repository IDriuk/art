// Regular Expression Matching
// https://leetcode.com/problems/regular-expression-matching/

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

var isMatch = function(s, p) {
  s = s.split('')
  p = p.split('')
  let sl = s.length
  let pl = p.length
  
  let dp = new Array(sl + 1).fill(null).map(_ => new Array(pl + 1).fill(false))
  dp[sl][pl] = true
  
  for (let i = sl; i >= 0; i--) {
      for (let j = pl - 1; j >= 0; j--) {
          let fm = i < sl && (p[j] == s[i] || p[j] == '.')
          if (j + 1 < pl && p[j + 1] == '*') {
              dp[i][j] = dp[i][j + 2] || fm && dp[i + 1][j]
          } else {
              dp[i][j] = fm && dp[i + 1][j + 1]
          }
      }
  }
  
  return dp[0][0]
};