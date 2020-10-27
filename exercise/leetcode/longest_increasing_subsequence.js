// Longest Increasing Subsequence
// https://leetcode.com/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
  if (!nums || nums.length == 0) {
      return 0
  }
  
  let levs = [nums[0]]
  
  for (let i = 1; i < nums.length; i++) {
      let num  = nums[i]
      let last = levs[levs.length - 1]
      
      if (num > last) {
          levs.push(num)
      }
      for (let j = 0; j < levs.length; j++) {
          if (levs[j] > num) {
              levs[j] = num
          }
          if (levs[j] == num) {
              break
          }
      }
  }
  
  return levs.length
};