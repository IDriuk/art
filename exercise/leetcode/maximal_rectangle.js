// Maximal Rectangle
// https://leetcode.com/problems/maximal-rectangle/

/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalRectangle = function(matrix) {
  if (matrix.length == 0) {
      return 0
  }
  let height = matrix.length
  let width = matrix[0].length
  
  let dp = new Array(height + 1)
      .fill(null)
      .map( _ => new Array(width + 1).fill([0, 0]))
  
  let max = 0
  
  for (let i = 1; i < height + 1; i++) {
      for (let j = 1; j < width + 1; j++) {
          if (matrix[i - 1][j - 1] != "0") {
              dp[i][j] = [
                  dp[i][j - 1][0] + 1, 
                  dp[i - 1][j][1] + 1
              ]
              
              let k = 0
              let maxW = Infinity
              while (dp[i - k][j][1]) {
                  let h = k + 1
                  let w = dp[i - k][j][0]
                  if (w < maxW) { maxW = w }
                  let area = h * maxW
                  if (area > max) {
                      mi = i
                      mj = j
                      max = area
                  }
                  k++
              }
              
          } else {
              dp[i][j] = [0, 0]
          }
      }
  }
  
  return max
};