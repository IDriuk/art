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

/* 
public int maximalRectangle(char[][] matrix) {
  int m = matrix.length;
  int n = matrix[0].length;
  int[] left = new int[n];
  int[] right = new int[n];
  int[] height = new int[n];
  // Arrays.fill(left, 0);
  Arrays.fill(right, n);
  // Arrays.fill(height, 0);
  int max = 0;
  for (int i = 0; i < m; i++) {
    // Compute height (can do this from either side).
    for (int j = 0; j < n; j++) {
      if (matrix[i][j] == ''1'') {
        height[j]++;
      } else {
        height[j] = 0;
      }
    }
    // Compute left boundaries (must from left to right).
    int leftBound = 0; // Index of leftmost 1 of current row.
    for (int j = 0; j < n; j++) {
      if (matrix[i][j] == ''1'') {
        left[j] = Math.max(left[j], leftBound);
      } else {
        left[j] = 0;
        leftBound = j + 1;
      }
    }
    // Compute right boundaries (must from right to left).
    int rightBound = n; // Index + 1 of rightmost 1 of current row.
    for (int j = n - 1; j >= 0; j--) {
      if (matrix[i][j] == ''1'') {
        right[j] = Math.min(right[j], rightBound);
      } else {
        right[j] = n; // Like reset. Make sure right[j] >= curRight.
        rightBound = j;
      }
    }
    // Compute the area of rectangle (can do this from either side).
    for (int j = 0; j < n; j++) {
      max = Math.max(max, (right[j] - left[j]) * height[j]);
    }
  }
  return max;
} 
*/