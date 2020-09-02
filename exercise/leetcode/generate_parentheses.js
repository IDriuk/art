// Generate Parentheses
// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let res = []
  
  function backtrack(str, open, close) {
      if (str.length == n * 2) {
          res.push(str)
      }
      
      if ( open < n) {
          backtrack( str + '(', open + 1, close)
      }
      
      if ( close < open) {
          backtrack( str + ')', open, close + 1)
      }
  }
  
  backtrack('', 0, 0)
  return res
};