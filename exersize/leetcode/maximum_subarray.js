// Maximum Subarray
// https://leetcode.com/problems/maximum-subarray/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  var maxSum = -Infinity
  var prevSum = 0
  
  for (var i = 0; i < nums.length; i++) {
      
      if ( nums[i] <= 0 && nums[i] > maxSum) { 
          maxSum = nums[i]
      }
      
      if ( prevSum <= 0 && nums[i] > 0 ) {
          prevSum = nums[i]
      } else {
          prevSum += nums[i] 
      }
      
      if (prevSum > maxSum) { maxSum = prevSum }
  }
  
  return maxSum
};