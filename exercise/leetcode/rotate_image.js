// Rotate Image
// https://leetcode.com/problems/rotate-image/submissions/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let len = matrix.length
  let deep = 0
  
  while (len - deep * 2 > 1) {
      for (let i = deep; i < len - deep - 1; i++) {
          let q = [
              matrix[deep][i],
              matrix[i][len - deep - 1],
              matrix[len - deep - 1][len - i - 1],
              matrix[len - i - 1][deep]
          ]
          
          matrix[i][len - deep - 1] = q[0]
          matrix[len - deep - 1][len - i - 1] = q[1] 
          matrix[len - i - 1][deep] = q[2]
          matrix[deep][i] = q[3]
      }
      
      deep++
  }
  
  return matrix
};