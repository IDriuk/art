// Sqrt(x)
// https://leetcode.com/problems/sqrtx/submissions/

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let r = 0
  while ( r * r <= x ) {
      r++
  }
  
  return r -1
};