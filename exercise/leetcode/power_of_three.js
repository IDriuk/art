// Power of Three
// https://leetcode.com/problems/power-of-three/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  let cub = 1
  
  while ( cub <= n) {
      if (cub == n) { 
          return true 
      } else {
          cub *= 3
      }
  }
  
  return false
};