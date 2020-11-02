// Maximal Square
// https://leetcode.com/problems/maximal-square/submissions/

/**
 * @param {character[][]} matrix
 * @return {number}
 */

var maximalSquare = function(matrix) {
  let rows = matrix.length;
  let cols = rows > 0 ? matrix[0].length : 0
  let max = 0
  
  let dp = new Array(cols + 1).fill(0) // prev row
  let prev = 0 // prev left el
  
  for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= cols; j++) {
          let temp = dp[j]
          if (matrix[i - 1][j - 1] == '1') {
              dp[j] = Math.min(dp[j - 1], dp[j], prev) + 1
              max = Math.max(max, dp[j])
          } else {
              dp[j] = 0
          }
          prev = temp
      }
  }
  
  return max * max
};


/* var maximalSquare = function(matrix) {
  let height = matrix.length
  if (!height) { return 0 }
  let width = matrix[0].length
  let max = 0
  
  for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
          if (matrix[i][j] == 1) {
              let count = 1
              while (check(i, j, count)) {
                  count++
              }
              max = count > max ? count : max
          }
      }
  }
  
  function check(y, x, c) {
      for (let i = y; i <= y + c; i++) {
          for (let j = x; j <= x + c ; j++) {
              if (!matrix[i] || 
                  !matrix[i][j] || 
                  matrix[i][j] == 0) { 
                  return false
              }
          }
      }
      return true
  }
  
  return max * max
}; */