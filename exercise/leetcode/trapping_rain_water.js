// Trapping Rain Water
// https://leetcode.com/problems/trapping-rain-water/submissions/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    
  let count = 0
  let left = 0
  let right = height.length - 1
  let lmax = height[left]
  let rmax = height[right]
  
  while (left < right) {
      if (lmax <= rmax) {
          let prevLMax = lmax
          let prevLeft = left
          do {
              left++
              lmax = height[left]
          } while (lmax < prevLMax && left < right)
          
          countWater(prevLMax, prevLeft, left)
      } else {
          let prevRMax = rmax
          let prevRight = right 
          do {
              right--
              rmax = height[right]
          } while (rmax < prevRMax && left < right)

          countWater(prevRMax, right, prevRight)
      }
  }
  
  return count
  
  function countWater(max, start, end) {
      for (let i = start; i < end; i++) {
          if ( max - height[i] > 0) {
              count += max - height[i]
          }
      }
  }  
};

/*
int trap(vector<int>& height)
{
    int left = 0, right = height.size() - 1;
    int ans = 0;
    int left_max = 0, right_max = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            height[left] >= left_max ? (left_max = height[left]) : ans += (left_max - height[left]);
            ++left;
        }
        else {
            height[right] >= right_max ? (right_max = height[right]) : ans += (right_max - height[right]);
            --right;
        }
    }
    return ans;
}
*/