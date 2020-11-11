// Maximum Product Subarray
// https://leetcode.com/problems/maximum-product-subarray/


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  if (nums == null || nums.length == 0) {
      return 0
  }
  
  let res = nums[0]
  let min = nums[0]
  let max = nums[0]
  
  for ( let i = 1; i < nums.length; i++) {
      let prevMin = min
      let prevMax = max
      let num = nums[i]
      
      min = Math.min(num, prevMin * num, prevMax * num )
      max = Math.max(num, prevMin * num, prevMax * num )
      
      res = Math.max(res, max)
  }
  
  return res
};

/* 
var maxProduct = function(nums) {
  let max = null
  
  for (let i = 0; i < nums.length; i++) {
      let cur = 1
      for (let j = i; j < nums.length; j++) {
          cur *= nums[j]
          max = max == null || cur > max ? cur : max
      }
  }
  
  return max
}; 
*/