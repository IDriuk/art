// Subsets
// https://leetcode.com/problems/subsets/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  let res = []
  let len = nums.length
  
  for (let i = Math.pow(2, len); i < Math.pow(2, len + 1); i++) {
      let mask = i.toString(2).substring(1)
      
      let sub = []
      for (let j = 0; j < len; j++){
          if (mask.charAt(j) == '1') {
              sub.push(nums[j])
          }
      }
      res.push(sub)
  }
  
  return res
};