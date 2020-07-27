// House robber
// https://leetcode.com/problems/house-robber/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
  if (!nums || nums.length < 1) return 0
  if ( nums.length < 3) return Math.max(...nums)
  
  var maxSums = [nums[0], nums[1], nums[0] + nums[2]]
  
  for ( var i = 3; i < nums.length; i++) {
      maxSums[i] = Math.max(maxSums[i - 2], maxSums[i - 3]) + nums[i] 
  }
  
  return Math.max(...maxSums)
};

// exceed the time limit
/* var rob = function(nums) {
  var maxSum = 0
  
  countSum(0, 0)
  countSum(0, 1)
  
  return maxSum
  
  function countSum(sum, nextIndex) {
      if ( nextIndex >= nums.length) return
      var nextSum = sum + nums[nextIndex]
      if (maxSum < nextSum) { maxSum = nextSum }
      countSum(nextSum, nextIndex + 2)
      countSum(nextSum, nextIndex + 3)
  }
}; */