// Number of Islands
// https://leetcode.com/problems/number-of-islands/submissions/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let color = 2
  let m = grid.length
  let n = grid[0].length
  
  for (let i = 0; i < m; i++ ) {
      for (let j = 0; j < n; j++) {
          if ( grid[i][j] == "1") {
              paint(i, j, color, true)
          }
      }
  }
  
  return color - 2
  
  function paint(i, j, c, isRoot = false) {
      
      if (grid[i] && grid[i][j] == "1") {
          grid[i][j] = c
          
          paint(i - 1, j, c)
          paint(i, j + 1, c)
          paint(i + 1, j, c)
          paint(i, j - 1, c)
      }
      
      if ( isRoot) { color++ }
  }
};