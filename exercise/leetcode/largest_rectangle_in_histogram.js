// Largest Rectangle in Histogram
// https://leetcode.com/problems/largest-rectangle-in-histogram/

/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function(heights) {
  if (!heights.length) { return 0 }
  
  let sorted = [...new Set(heights)].sort((a, b) => b - a)
  let max = 0
  
  for (let i = 0; i < sorted.length; i++) {
      let h = sorted[i]
      let w = 0
      let area = 0
      for (let j = 0; j < heights.length; j++) {
          if (heights[j] >= h) {
              w++
              area = h * w
              max = area > max ? area : max
          } else {
              w = 0
          }
      }
  }
  
  return max
};

/*
var largestRectangleArea = function(heights) {
  if (!heights.length) { return 0 }
  
  let matrixH = Math.max(...heights)
  let matrixW = heights.length
  
  let matrix = new Array(matrixH).fill(null).map( _ => new Array(matrixW))
  
  for (let i = 0; i < matrixH; i++) {
      for (let j = 0; j < matrixW; j++) {
          matrix[i][j] = i >= matrixH - heights[j] ? 1 : 0
      }
  }
  
  let h = new Array(matrixW).fill(0)
  let l = new Array(matrixW).fill(0)
  let r = new Array(matrixW).fill(matrixW)
  let max = 0
  
  for (let i = 0; i < matrixH; i++) {
      for (let j = 0; j < matrixW; j++) {
          h[j] = matrix[i][j] ? h[j] + 1 : 0
      }
      
      let lb = 0
      for (let j = 0; j < matrixW; j++) {
          if (matrix[i][j]) {
              l[j] = Math.max(l[j], lb)   
          } else {
              lb = j + 1
              l[j] = 0
          }
      }
      
      let rb = matrixW
      for (let j = matrixW - 1; j >= 0; j--) {
          if (matrix[i][j]) {
              r[j] = Math.min(r[j], rb)    
          } else {
              rb = j
              r[j] = matrixW
          }
      }
      
      for (let j = 0; j < matrixW; j++) {
          let area = h[j] * (r[j] - l[j])
          max = area > max ? area : max
      }
  }
  
  return max
};
*/