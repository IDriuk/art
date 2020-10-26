// Search a 2D Matrix II
// https://leetcode.com/problems/search-a-2d-matrix-ii/

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

var searchMatrix = function(matrix, target) {
  let row = matrix.length - 1
  let col = 0
  
  while (row >= 0 && col < matrix[0].length) {
      if (matrix[row][col] > target) {
          row--
      } else if (matrix[row][col] < target) {
          col++
      } else {
          return true
      }
  }
  
  return false
};

/* var searchMatrix = function(matrix, target) {
  if (!matrix || matrix.length == 0 || matrix[0].length == 0) { 
      return false 
  }
  
  let width = matrix[0].length
  let height = matrix.length
  
  if (
      matrix[height - 1][width - 1] < target || 
      matrix[0][0] > target
  ) {
      return false
  }
  
  for (let i = 0; i < width; i++) {
      let val = matrix[0][i] 
      if (val == target) {
          return true
      } else if (val > target) {
          width = i
          break
      }
  }
  
  for (let i = 0; i < height; i++) {
      let val = matrix[i][0] 
      if (val == target) {
          return true
      } else if (val > target) {
          height = i
          break
      }
  }
  
  let startX = 1
  let startY = 1
  
  for (let i = startX; i < width; i++) {
      let val = matrix[height - 1][i] 
      if (val == target) {
          return true
      } else if (val < target) {
          startX = i + 1
      } else {
          break
      }
  }
  
  for (let i = startY; i < height; i++) {
      let val = matrix[i][width - 1] 
      if (val == target) {
          return true
      } else if (val < target) {
          startY = i + 1
      } else {
          break
      }
  }
  
  if (
      matrix[height - 1][width - 1] < target || 
      matrix[startY][startX] > target
  ) {
      return false
  }
  
  for ( let i = startY; i < height; i++) {
      for ( let j = startX; j < width; j++) {
          let val = matrix[i][j]
          if ( val == target ) {
              return true
          }
      }
  }
  
  return false
  
}; */