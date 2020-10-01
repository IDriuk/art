// Unique Paths
// https://leetcode.com/problems/unique-paths/submissions/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(n, m) {
  let grid = []
  
  for (let i = 0; i < n; i++) {
      grid[i] = [1]
  }

  for (let i = 0; i < m; i++) {
      grid[0][i] = 1
  }

  for (let i = 1; i < n; i++) {
      for (let j = 1; j < m; j++) {
          grid[i][j] = grid[i - 1][j] + grid[i][j - 1]
      }
  }
    
  return grid[n - 1][m - 1]
};