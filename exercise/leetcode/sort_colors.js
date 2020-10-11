// Sort Colors
// https://leetcode.com/problems/sort-colors/submissions/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let end = nums.length - 1
  let i = 0
  let el
  
  while (i <= end) {
      el = nums[i]
      if (el == 1) { 
          i++ 
      } else if (el == 0) {
          nums.splice(i, 1)
          nums.unshift(el)
          i++
      } else {
          nums.splice(i, 1)
          nums.push(el)
          end--
      }
  }
};