// Container With Most Water
// https://leetcode.com/problems/container-with-most-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0
  let right = height.length - 1
  let maxArea = 0

  let l
  let h
  let area

  while (left < right) {
    for (let i = left; i < right; i++) {
      l = right - i
      h = Math.min(height[i], height[right])
      area = h * l
      if (area > maxArea) {
        maxArea = area
        left = i
      }
    }

    for (let j = right; j > left; j--) {
      l = j - left
      h = Math.min(height[left], height[j])
      area = h * l
      if (area > maxArea) {
        maxArea = area
        right = j
      }
    }

    if (height[left] < height[right]) { left++ } else { right-- }
  }
  
  return maxArea
};

/* public class Solution {
  public int maxArea(int[] height) {
      int maxarea = 0, l = 0, r = height.length - 1;
      while (l < r) {
          maxarea = Math.max(maxarea, Math.min(height[l], height[r]) * (r - l));
          if (height[l] < height[r])
              l++;
          else
              r--;
      }
      return maxarea;
  }
} */