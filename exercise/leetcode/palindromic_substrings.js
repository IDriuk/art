// Palindromic Substrings
// https://leetcode.com/problems/palindromic-substrings/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let l = s.length
  let res = 0
  
  for (let c = 0; c <= 2*l - 1; c++) {
      let left = c / 2
      let right = left + c % 2
      while ( left >= 0 && right < l && s.charAt(left) == s.charAt(right)) {
          res++
          left--
          right++
      }
  }
  
  return res
};