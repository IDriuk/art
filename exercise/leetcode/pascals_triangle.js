// Pascal's Triangle
// https://leetcode.com/problems/pascals-triangle/

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
  if (numRows == 0) return []
  
  let triangle = [[1]]
  let i = 1
  
  while (i < numRows) {
      let row = []
      let prevRow = triangle[i - 1]
      
      for (let j = 0; j <= i; j++) {
          let v1 = prevRow[j - 1] || 0
          let v2 = prevRow[j] || 0
          row.push(v1 + v2)
      }
      
      triangle.push(row)
      i++
  }
  
  return triangle
};