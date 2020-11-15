// 3Sum
// https://leetcode.com/problems/3sum/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums == null || nums.length < 3) { return [] }
  
  nums.sort( (a, b) => a - b)
  
  let res = []
 
  for (let i = 0; i < nums.length - 2; i++) {
      if (nums[i] > 0) {
          break
      }
      
      if ( i > 0 && nums[i] == nums[i - 1]) {
          continue
      }
      
      let j = i + 1
      let k = nums.length - 1
      
      while (j < k) {
          if (nums[i] + nums[j] > 0) {
              break
          }
          
          if (j > i + 1 && nums[j] == nums[j - 1]) {
              j++
              continue
          }
          
          if (nums[i] + nums[j] + nums[k] < 0) {
              j++
          } else if (nums[i] + nums[j] + nums[k] > 0) {
              k--
          } else {
              res.push([nums[i], nums[j], nums[k]])
              j++
              k--
          }
      }
  }
  
  return res
};